const fs = require('fs');

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'utf-8');

let fileText = '';


console.log('type something...');

readStream.on('data', data => {
    console.log(`I read ${data.toString().trim().length} characters of text`);
    fileText += data;
})

readStream.once('data', data => {
    console.log(data);
});


readStream.on('end', () => {
    console.log('finished reading file');
    console.log(`In total I read ${fileText.length - 1} characters`)
})