const ftp = require('vinyl-ftp');
const fs = require('vinyl-fs');

const { PRODUCTION_SERVER_HOST, PRODUCTION_SERVER_PASSWORD } = process.env;
const options = {
	host: PRODUCTION_SERVER_HOST,
	user: PRODUCTION_SERVER_HOST,
	password: PRODUCTION_SERVER_PASSWORD,
	parallel: 10,
};
const connection = ftp.create(options);
console.log('Uploading to FTP');
console.log(options);

fs.src(['./public/**'], { buffer: false }).pipe(connection.dest('/'));
