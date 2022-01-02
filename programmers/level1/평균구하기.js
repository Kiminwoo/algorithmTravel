function solution(arr) {
  var answer = 0;

  for(let sum of arr){ // 배열의 값 Sum
    answer += sum;
  }
  answer = answer / arr.length
  return answer;
}