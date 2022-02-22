const fs = require('fs');

const writeStream = fs.createWriteStream('./assets/myFile.txt', 'utf-8');
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'utf-8');

// writeStream.write('hello ')
// writeStream.write('world \n')

// readStream.on('data', data => {
//     writeStream.write(data);
// })

readStream.pipe(writeStream);