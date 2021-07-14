function solution(absolutes, signs) {
    var answer = 0;
    signs.forEach((element, index) => {
        if (String(element).toLowerCase().indexOf("true") != -1) // true 라면
            answer += Number(absolutes[index]);
        else {
            answer -= Number(absolutes[index]); // fasle 라면
        }
    });
    return answer;
}