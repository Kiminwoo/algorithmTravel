function solution(lottos, win_nums) {
  var answer = [];
  let cnt=lottos.length;
  //없는 번호만
  lottos=lottos.filter(lotto=>win_nums.indexOf(lotto)===-1);
  cnt-=lottos.length;//맞춘 개수, 최저 맞춘 개수
  let min=cnt;
  let max=cnt+lottos.reduce((acc,cur)=>{
    if(cur===0)acc+=1;
    return acc;
  },0);

  function rank(x){
    if(x===6)return 1;
    else if(x===5)return 2;
    else if(x===4)return 3;
    else if(x===3)return 4;
    else if (x===2)return 5;
    else return 6;
  }

  return [rank(max),rank(min)];
}