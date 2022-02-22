const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

// setTimeout
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  //clearing inteval (stoping)
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
};

setTimeout(timerFinished, waitTime);

// setInteval
const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
};
const interval = setInterval(incTime, waitInterval);
