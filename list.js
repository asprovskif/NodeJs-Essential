const fs = require('fs');


fs.readdir('./assets', (err, files) => {
    if(err) {
        throw err;
    }
    console.log('completed');
    console.log(files);
});
console.log('started reading files');