
// function solution(absolutes, signs) {
//     var answer = 0;

//     signs.forEach((element, index) => {

//         console.log(element);
//         console.log(element.toLowercase());
//         // if (element.toLowerCase().indexOf("true") >= -1) // true 라면 
//         //     answer += Number(absolutes[index]);
//         // else {
//         //     answer -= Number(absolutes[index]); // fasle 라면
//         // }
//     });

//     return answer;
// }




function solution(absolutes, signs) {
    var answer = 0;

    signs.forEach((element, index) => {

        console.log(String(element).indexOf("true"));

        if (String(element).toLowerCase().indexOf("true") != -1) // true 라면
            answer += Number(absolutes[index]);
        else {
            answer -= Number(absolutes[index]); // fasle 라면
        }
    });

    return answer;
}



console.log(solution([4, 7, 12], [true, false, true]))

