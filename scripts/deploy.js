const FtpDeploy = require('ftp-deploy');
const path = require('path');

const ftpDeploy = new FtpDeploy();
const {
	PRODUCTION_SERVER_HOST = 'web.less-harm.com',
	PRODUCTION_SERVER_PASSWORD = 'kokot',
} = {}; // process.env;
const config = {
	user: PRODUCTION_SERVER_HOST,
	password: PRODUCTION_SERVER_PASSWORD,
	host: PRODUCTION_SERVER_HOST,
	port: 21,
	localRoot: path.resolve(__dirname, '..', 'public'),
	remoteRoot: '/',
	include: ['*', '**/*'], // this would upload everything except dot files
	exclude: [], // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
	deleteRemote: true, // delete existing files at destination before uploading
	// 	forcePasv: true, // Passive mode is forced (EPSV command is not sent)
};
ftpDeploy.on('uploading', function(data) {
	console.log('uploading', data);
});
ftpDeploy.on('uploaded', function(data) {
	console.log('uploaded', data); // same data as uploading event
});
ftpDeploy.on('log', function(data) {
	console.log('log', data); // same data as uploading event
});
ftpDeploy.on('upload-error', function(data) {
	console.log(data.err); // data will also include filename, relativePath, and other goodies
});

// use with promises
ftpDeploy
	.deploy(config)
	.then(() => console.log('finished'))
	.then(() => process.exit(0))
	.catch(err => {
		console.log(err);
		process.exit(1);
	});
