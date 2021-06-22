function solution(answers) {
  var answer = [];
  let answersarray =
      [[ 1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  let answersvalue = [0,0,0];
  for(let index=0; index < answers.length ; index++){
    if(answers[index] === answersarray[0][index%5]){ // 첫번째 수포자
      answersvalue[0]++;
    }
    if(answers[index] === answersarray[1][index%8]){ // 두번째 수포자
      answersvalue[1]++;
    }
    if(answers[index] === answersarray[2][index%10]){ // 세번째 수포자
      answersvalue[2]++;
    }
  }


  for(let rank = 0 ; rank < answersvalue.length ; rank ++){ // 0일 경우 , 같을 경우
    if(answersvalue[rank] == 0 ){ // 값이 없다면
      answersvalue.slice(rank,rank);
    }
  }
  return answer;
}
