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