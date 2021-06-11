// 'exports.함수이름'을 이용한 모듈 개발
// 복수 객체 내보내기
function debug(msg) {
  console.debug(msg);
}

function log(msg) {
  console.log(msg);
}

function error(msg) {
  console.error(msg);
}

exports.debug = debug;
exports.log = log;
exports.error = error;