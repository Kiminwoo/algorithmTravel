function solution(x) {

  let answer = true;
  let sum = 0;

  for (let index of String(x).split("")) { // 숫자를 문자열로 바꾼 후 split
    sum += Number(index);
  }
  if (x % sum != 0) { // x 가 sum으로 나누어 진다면
    answer = false;
  }
  return answer
}