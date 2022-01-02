function solution(phone_number) {
  var answer = '';
  for (let loop = 0; loop < phone_number.length; loop++) {
    console.log(loop);
    if (phone_number.length - 5 < loop) { // 끝 4자리 추출
      answer += phone_number[loop];
    }
    else {
      answer += "*" // 끝 4자리 앞까지 * 처리
    }
  }
  return answer;
}