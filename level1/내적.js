function solution(a, b) {
  var answer = 0;

  // 길이가 같다는 조건을 이용
  for(let i = 0; i < a.length ; i++ ){
    answer += a[i] * b[i];
  }
  return answer;
}
