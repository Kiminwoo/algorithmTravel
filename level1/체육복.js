/* 2020.05.20 초기 답
 * 테스트 케이스 실패
 */

function solution(n, lost, reserve) {
  // n : 전체 학생의 수
  // lost :: 체육복을 도난당한 학생들의 번호가 담긴 배열
  // reserve :: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
  var answer = n;

  if(lost.length < reserve.length){
    for(var rperson=0 ; rperson <reserve.length ; rperson++){
      var checkcount = 0 ;
      for(var lperson=0; lperson < lost.length ; lperson++){
        if(Math.abs(reserve[rperson] - lost[lperson]) == 1){ // 1일때
          continue;
        } else {
          checkcount ++ ;
        }
      }
      if(checkcount == lost.length){
        answer -- ;
      }
    }
  }

  else if(lost.length > reserve.length){
    answer -- ;
    for(var lperson=0; lperson < lost.length ; lperson++){
      var checkcount = 0 ;
      for(var rperson=0 ; rperson <reserve.length ; rperson++){
        if(Math.abs(lost[lperson] - reserve[rperson]) == 1){ // 1일때
          continue;
        }
        else {
          checkcount ++ ;
        }
      }
      if(checkcount == lost.length){
        answer -- ;
      }
    }
  }
  else{ // lost == reserve
    for(var lperson=0; lperson < lost.length ; lperson++){
      var checkcount = 0 ;
      for(var rperson=0 ; rperson <reserve.length ; rperson++){
        if(Math.abs(lost[lperson] - reserve[rperson]) == 1){ // 1일때
          continue;
        }
        else {
          checkcount ++ ;
        }
      }
      if(checkcount == lost.length){
        answer -- ;
      }
    }
  }

  return answer;
}


/* 2020.06.13 초기 답
 * 통과
 */


function solution(n, lost, reserve) {
  // n : 전체 학생의 수
  // lost :: 체육복을 도난당한 학생들의 번호가 담긴 배열
  // reserve :: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

  var answer = 0;
  var student = [];

  // 학생개개인을 1로 설정
  for(var person=0; person < n ; person++){
    student.push(1);
  }

  // 여벌의 옷이 있는 학생에게 1을 더해줌
  for(var spareperson=0; spareperson<reserve.length; spareperson++){
    student[reserve[spareperson]-1]++;
  }

  // 잃어 버린 학생에게 -1씩 빼줌
  for(var lostperson=0; lostperson<lost.length; lostperson++){
    student[lost[lostperson]-1]--;
  }

  // 도난 당한 사람 주변에 2개인 사람꺼 빌려주기
  for(var count=0; count<n; count++){
    if(student[count]==0){ // 도난을 당해서 0이 된 사람
      if(count > 0 && student[count-1] >=2){ // 잃어버린 사람이 왼쪽에서 빌릴 경우
        student[count-1] -=1;
        student[count] =1;
        answer ++;
      }
      else if ( count <= n  && student[count+1] >=2 ){ // 잃어버린 사람이 오른쪽에서 빌릴 경우
        student[count+1] -=1;
        student[count] =1;
        answer++;
      }
    } else { // 0이 아닌 사람 = 수업에 참여 할 수 있음
      answer++;
    }
  }

  return answer;
}