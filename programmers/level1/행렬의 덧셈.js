// ## 수정 후
function solution(arr1, arr2) {
  let answer = new Array(); // answer 배열 생성

  for (let i = 0; i < arr1.length; i++) { // 큰 이중배열의 길이
    answer[i] = new Array();
    for (let i2 = 0; i2 < arr1[i].length; i2++) { // 이중 배열의 길이
      answer[i][i2] = arr1[i][i2] + arr2[i][i2]
    }
  }

  return answer;
}