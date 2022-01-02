// 첫번째 시도

// function solution(s) {
//   var answer = '';
//
//   s = s.split(' ');
//
//   for(let element of s){
//     for(let chk=0; chk < element.length ; chk++){
//       if(element.indexOf(element[chk]) % 2 == 1){ // 홀수 일 때
//         answer += element[chk].toLowerCase(); // 대문자로
//       }
//       else{
//         answer += element[chk]; // 그대로
//       }
//     }
//     answer += " ";
//   }
//
//   return answer;
// }

// 두번째 시도 :: 해결

function solution(s) {
  let answer = '';
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") { // 공백은 공백으로 두기
      index = 0;
      answer += " ";
    }
    else { // 공백이 아닐 경우
      if (index % 2 === 0) { // 짝수일 경우
        answer += s[i].toUpperCase(); // 대문자
      } else { // 홀수일 걍우
        answer += s[i].toLowerCase(); // 소문자
      }
      index++;
    }
  }
  return answer;
}