function solution(numbers) {
    var answer = [];
    for (let loop = 0; loop < numbers.length; loop++) { // numbers 1차 for문 
        for (let value of numbers) { // numbers의 2차 for문 
            if (loop != numbers.indexOf(value)) { // 서로 다른 인덱스일 경우
                if (!answer.includes(Number(numbers[loop]) + Number(value))) { // 중복 제거
                    answer.push(Number(numbers[loop]) + Number(value));
                }
            }
        }
    }
    return answer.sort(function (a, b) { return a - b }); // 오름차순 
}

