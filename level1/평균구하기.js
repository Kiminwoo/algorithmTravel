function solution(arr) {
  var answer = 0;

  for(let sum of arr){
    answer += sum;
  }
  answer = answer / arr.length
  return answer;
}