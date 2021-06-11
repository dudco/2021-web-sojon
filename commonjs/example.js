// 일반 module 사용 방법
const _ = require('lodash');

const arr = _.fill(Array(10), 4)
console.log(arr);


// exports를 이용한 module 사용 방법
const logger = require('./logger');

logger.debug("This is debug!");
logger.log("This is log!!");
logger.error("This is error!!!");


// module.exports을 이용한 module 사용방법
const calc = require("./calcurator");

console.log(calc.sum(3, 4), calc.sub(4, 3), calc.multiply(2, 2), calc.divide(3, 2));