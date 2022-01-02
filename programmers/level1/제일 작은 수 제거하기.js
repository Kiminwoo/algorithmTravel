// 초기답 :: 테스트 케이스 실패

function solution(arr) {
  var answer = [];

  if (arr.length <= 1) {
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(arr)), 1);
    answer = arr;
  }

  return answer;
}

// 최종 답 :: 성공
function solution(arr) {
  var answer = [];

  if (arr.length <= 1) {
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    answer = arr;
  }

  return answer;
}