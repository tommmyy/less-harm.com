const ftp = require('vinyl-ftp');
const fs = require('vinyl-fs');

const { HOST, PWD } = process.env;

const connection = ftp.create({
	host: HOST,
	user: HOST,
	password: PWD,
	parallel: 10,
});
console.log('Uploading to FTP');

fs.src(['./public/**'], { buffer: false }).pipe(connection.dest('/'));
