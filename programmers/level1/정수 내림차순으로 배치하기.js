function solution(n) {

  return Number(String(n).split('').sort(function (a, b) { return b-a }).join(''));

}