const ftp = require('basic-ftp');
const fs = require('fs');
const path = require('path');

example();

async function example() {
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
			host: 'web.less-harm.com',
			user: 'web.less-harm.com',
			password: 'kokot',
		});
		await client.ensureDir('/public');
		await client.clearWorkingDir();
		await client.uploadDir(path.resolve(__dirname, '..', 'public'));
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
	client.close();
	process.exit(0);
}
