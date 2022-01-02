function solution(array, commands) {
  var answer = [];

  commands.forEach((array1) => { // 2차 배열
    var answerarray = array.slice(); //  결과를 위한 배열 복사
    let returnvalue = answerarray.slice(array1[0]-1,array1[1]).sort(function(a,b){ // 정렬
      return a-b; // ASCII코드로 되어 있기 때문에 음수,양수로 정렬의 순서를 정해줌.
    });

    answer.push(returnvalue[array1[2]-1]);
  });

  return answer;
}