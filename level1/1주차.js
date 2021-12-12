function solution(price, money, count) {  // 이용료 , 처음애 가지고 있는 금액 , 놀이기구 횟수 
    let usingprice = 0;
    for (let cnt = 1; cnt <= count; cnt++) { // 이용횟수만큼 증가하는 금액 
        usingprice += cnt * price // 총 이용 금액 
    }
    return usingprice > money ? usingprice - money : 0 // 처음에 가지고 있던 금액이랑 총 이용요금 비교
}


console.log(solution(3, 20, 4));