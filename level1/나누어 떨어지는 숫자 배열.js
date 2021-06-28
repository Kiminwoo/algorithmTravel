function solution(arr, divisor) {
  var answer = [];

  for(let element of arr){
    if(element % divisor == 0){
      answer.push(element);
    }
  }
  if(answer.length == 0){ // answer의 아무값도 존재 하지 않는다면
    answer.push(-1);
  }

  return answer.sort(function(a,b){return a-b;}); // 오름차순 정렬
}