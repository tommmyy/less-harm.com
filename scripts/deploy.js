const FtpDeploy = require('ftp-deploy');

const ftpDeploy = new FtpDeploy();
const { PRODUCTION_SERVER_HOST, PRODUCTION_SERVER_PASSWORD } = process.env;
const config = {
	user: PRODUCTION_SERVER_HOST,
	password: PRODUCTION_SERVER_PASSWORD,
	host: PRODUCTION_SERVER_HOST,
	port: 21,
	localRoot: `${__dirname}/public`,
	remoteRoot: '/public/',
	include: ['*', '**/*'], // this would upload everything except dot files
	exclude: [], // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
	deleteRemote: true, // delete existing files at destination before uploading
	forcePasv: true, // Passive mode is forced (EPSV command is not sent)
};

// use with promises
ftpDeploy
	.deploy(config)
	.then(() => 'finished')
	.then(() => process.exit(0))
	.catch(err => {
		console.log(err);
		process.exit(0);
	});

// use with callback
ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err);
	else console.log('finished');

	process.exit(0);
});
