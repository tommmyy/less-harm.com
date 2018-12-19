const ftp = require('basic-ftp');
const path = require('path');

const { PRODUCTION_SERVER_HOST, PRODUCTION_SERVER_PASSWORD } = process.env;
deploy();

async function deploy() {
	const client = new ftp.Client(0);
	client.trackProgress(info => {
		console.log('File', info.name);
		console.log('Type', info.type);
		console.log('Transferred', info.bytes);
		console.log('Transferred Overall', info.bytesOverall);
	});
	client.ftp.verbose = true;
	try {
		await client.access({
			host: PRODUCTION_SERVER_HOST,
			user: PRODUCTION_SERVER_HOST,
			password: PRODUCTION_SERVER_PASSWORD,
		});
		await client.ensureDir('/');
		await client.clearWorkingDir();
		await client.uploadDir(path.resolve(__dirname, '..', 'public'));
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
	client.close();
	process.exit(0);
}
