const ftp = require('vinyl-ftp');
const fs = require('vinyl-fs');

const { PRODUCTION_SERVER_HOST, PRODUCTION_SERVER_PASSWORD } = process.env;
const options = {
	host: PRODUCTION_SERVER_HOST,
	user: PRODUCTION_SERVER_HOST,
	password: PRODUCTION_SERVER_PASSWORD,
	reload: true,
	log: console.log,
	debug: console.log,
};
const connection = ftp.create(options);
console.log('Uploading to FTP');
console.log(options);

fs.src(['./public/**'], { buffer: true, dot: true })
	.pipe(connection.dest('/'))
	.on('end', function() {
		console.log("We're done!");
		process.exit(0);
	});
