// 단일 객체 내보내기
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("0으로 숫자를 나눌 수 없습니다.");
  return a / b;
}


export default {
  sum,
  sub,
  multiply,
  divide
}
