function solution(numbers, hand) {
    // 조건 
    // 왼손 엄지손가락 (1, 4 , 7) , 오른손 엄지손가락 (3, 6 , 9) , 두손가락 (2,5,8,0)
    // 4가지 방향 , 키패드 이동 한칸은 거리 1 
    // numbers = 키패드 (순서대로) , hand = 주 손가락 (두 엄지손가락의 거리가 같다면)
    // 키패드를 순서대로 누르기 때문에 손가락이 위치한 숫자와 눌러야할 숫자와의 거리를 보기

    var answer = '';

    let fingerposition = { // 손가락 위치 객체
        rightposition: [3, 6, 9],
        bothposition: [2, 5, 8, 0],
        leftposition: [1, 4, 7],
    }

    let currentpushposition = ["*", "#"]; // 왼손 , 오른손 , 눌러야할 숫자 

    for (let pushnumber of numbers) { // 눌러야할 숫자들 (차례대로) // in Vs of 차이 ... in은 객체 순환할 때 , of는 배열 순환할 때 
        console.log("number :: " + pushnumber);
        currentpushposition[2] = pushnumber; // 숫자 누름
        console.log(" 현재 상태 :: " + currentpushposition);
        for (let finger in fingerposition) {
            console.log("finger :: " + finger + " finger value " + fingerposition[finger]);
            // if (currentpushposition[0] = ! "*" && currentpushposition[1] != "#") { // 왼손과 오른손이 초기 위치를 벗어났다면

            // }
            console.log("fingerposition[finger].indexOf(currentpushposition[2]) :: " + fingerposition[finger].indexOf(currentpushposition[2]));
            if (fingerposition[finger].indexOf(currentpushposition[2]) > -1) { // 키패드를 누른 손가락의 위치
                console.log("손가락위치 :: " + finger);
                if (finger.includes("left")) { // 왼쪽손가락범위에 포함된다면
                    currentpushposition[0] = pushnumber;
                    answer += "L";
                    console.log("왼손입니다.");
                } else if (finger.includes("right")) { // 오른쪽손가락범위에 포함된다면
                    currentpushposition[1] = pushnumber;
                    answer += "R";
                    console.log("오른손입니다.");
                } else {
                    // 가운데 위치에 있다면 // 키패드 위치에서 계산 // 키패드의 위치를 눕혔다고 생각
                    // both 위치로 가기 위해서는 +1의 무조건적인 위치 이동이 필요 
                    console.log("가운데입니다.");
                    let leftindex = Math.abs(fingerposition.leftposition.indexOf(currentpushposition[0]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 왼손 인덱스
                    let rightindex = Math.abs(fingerposition.rightposition.indexOf(currentpushposition[1]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 오른손 인덱스 
                    console.log("*****************");
                    console.log(leftindex);
                    console.log(rightindex);
                    console.log("*****************");

                    leftindex < rightindex ?
                        (
                            answer += 'L',
                            currentpushposition[0] = pushnumber

                        ) : leftindex > rightindex ?
                            (
                                answer += 'R',
                                currentpushposition[1] = pushnumber
                            ) :
                            (
                                answer += hand.toUpperCase().substring(0, 1),
                                console.log("hand.toUpperCase().substring(0, 0) ::" + hand.toUpperCase().substring(0, 1)),
                                hand.toUpperCase().substring(0, 1) == 'R' ? answer += 'R' : answer += 'L'
                            )
                }
                console.log("current finger :: " + finger);
            }
            // else { // 처음 위치라면
            //     if (fingerposition[finger].indexOf(currentpushposition[2])) { // 키패드를 누른 손가락의 위치 
            //         if (finger.includes("left")) { // 왼쪽손가락범위에 포함된다면
            //             currentpushposition[0] = pushnumber;
            //             answer += "L";
            //         } else if (finger.includes("right")) { // 오른쪽손가락범위에 포함된다면
            //             currentpushposition[1] = pushnumber;
            //             answer += "R";
            //         }
            //         console.log("current finger :: " + finger);
            //     }

            //  }
        }
        console.log("answer :: " + answer);
    }

    return answer;
}


console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));