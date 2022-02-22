const cp = require('child_process');

// cp.exec("lst", (err, data, stderr) => {
//     if (err) {
//         throw err;
//     }

//     console.log(data);
// });


cp.exec('node readStream', (err, data, stderr) => {
    console.log(data);
})