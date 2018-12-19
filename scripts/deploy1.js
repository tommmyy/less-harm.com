const ftp = require('basic-ftp');
const fs = require('fs');

example();

async function example() {
	const client = new ftp.Client();
	client.ftp.verbose = true;
	try {
		await client.access({
			host: 'web.less-harm.com',
			user: 'web.less-harm.com',
			password: 'kokot',
		});
		console.log(await client.list());

		await client.upload(fs.createReadStream('README.md'), 'README.md');
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
	client.close();
	process.exit(0);
}
