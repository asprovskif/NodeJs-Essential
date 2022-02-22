let count = 0;
const inc = () => ++count;
const decr = () => --count;

const getCount = () => count;

module.exports = {
    inc,
    decr,
    getCount,
}