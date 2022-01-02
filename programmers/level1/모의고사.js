function solution(answers) {
  var answer = [];
  let answersarray =
    [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  let answersvalue = [0, 0, 0]; // [첫번째,두번쨰,세번째] 0 으로 세팅

  for (let index = 0; index < answers.length; index++) {
    if (answers[index] === answersarray[0][index % 5]) { // 첫번째 수포자 ( 1 ~5 반복 )
      answersvalue[0]++;
    }
    if (answers[index] === answersarray[1][index % 8]) { // 두번째 수포자 ( 2 ~ 5 반복 )
      answersvalue[1]++;
    }
    if (answers[index] === answersarray[2][index % 10]) { // 세번째 수포자 ( 3 ~ 5 반복 )
      answersvalue[2]++;
    }
  }

  let maxvalue = Math.max.apply(null, answersvalue); // 개수 세워준 배열에 최대값을 뽑음
  for (let a = 0; a < answersvalue.length; a++) { // 총 개수 카운트 배열에서 ..
    if (answersvalue[a] === maxvalue) {
      answer.push(a + 1); // return에 맞춰주기 위해서 (자리수)
    }
  }
  return answer;
}