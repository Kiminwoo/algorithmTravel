let count = 0;

function solution(x) {
  if (x != 1) {
    if (x % 2 == 1) { // 홀수라면
      x = (x * 3) + 1;
      count++;
    } else if (x % 2 == 0) { // 짝수라면
      x = x / 2;
      count++;
    }
    return solution(x);
  } else { // 1이라면
    return count >= 500 ? -1 : count; // 500 보다 크면 -1 , 그렇지 않으면 count
  }
}