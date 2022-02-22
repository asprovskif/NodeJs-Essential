const fs = require('fs');

const md = `
# This is a new file

We can write text to a file

* fs.readdir
* fs.readFile
`
;

fs.writeFile('./FSModule/assets/notes.md', md.trim(), (err) => {
    if(err) {
        throw err;
    }

    console.log('file saved')
})