function solution(n) {
    let answer = 0;
    String(n).split('').forEach(function (element) {
        answer += Number(element);
    });
    return answer;
}

console.log(solution(1234));