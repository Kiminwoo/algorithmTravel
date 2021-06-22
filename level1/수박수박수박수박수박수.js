function solution(n) {
  var answer = '';
  for(let loop=1;loop<n+1;loop++){
    if(loop % 2 === 1) // 홀수일 때
      answer += '수';
    else {
      answer += '박';
    }
  }
  return answer;
}