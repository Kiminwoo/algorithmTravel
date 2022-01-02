function solution(s) { // 조건 (대문자와 소문자는 구별하지 않습니다.)
    var answer = true;
    let comparecount = 0;

    for (let element of String(s).split('')) {
        switch (element.toUpperCase()) { // 대문자로 치환  
            case 'P': // P일 때 
                comparecount++;
                break;
            case 'Y': // Y일 때 
                comparecount--;
                break;
        }
    }

    if (comparecount != 0) { // p 의 개수 , y의 개수가 다르다면 , 
        answer = false;
    }


    return answer;
}