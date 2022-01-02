function solution(num) {
  var answer = '';
  answer = Math.abs(num) % 2 === 1 ? "Odd" : "Even"
  return answer;
}