const cp = require("child_process");

const questionApp = cp.spawn("node", ["questionsForReadline.js"]);

questionApp.stdin.write('Filip \n');
questionApp.stdin.write('Skopje \n');
questionApp.stdin.write('Nothing \n');

questionApp.stdout.on("data", (data) => {
  console.log(`from the question app ${data}`);
});

questionApp.on("close", () => {
  console.log("questionApp process exited");
});
