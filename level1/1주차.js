function solution(price, money, count) {
    let usingprice = 0;
    for (let cnt = 1; cnt <= count; cnt++) {
        usingprice += cnt * price
    }
    return usingprice > money ? usingprice - money : 0
}

console.log(solution(3, 20, 4));