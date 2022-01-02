function solution(s) {
  var answer = '';

  if(s.length % 2 == 1){ // 홀수 일 때
    answer = s.charAt((s.length - 1) / 2);
  } else { // 짝수 일때
    answer =  s.charAt((s.length / 2) -1) +s.charAt((s.length / 2));
  }

  return answer;
}