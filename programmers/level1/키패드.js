
// 초기작업 :: testcase 3 일때 0의 값에서 실패 

function solution(numbers, hand) {
    // 조건 
    // 왼손 엄지손가락 (1, 4 , 7) , 오른손 엄지손가락 (3, 6 , 9) , 두손가락 (2,5,8,0)
    // 4가지 방향 , 키패드 이동 한칸은 거리 1 
    // numbers = 키패드 (순서대로) , hand = 주 손가락 (두 엄지손가락의 거리가 같다면)
    // 키패드를 순서대로 누르기 때문에 손가락이 위치한 숫자와 눌러야할 숫자와의 거리를 보기

    var answer = '';

    let fingerposition = { // 손가락 위치 객체
        rightposition: [3, 6, 9, "#"],
        bothposition: [2, 5, 8, 0],
        leftposition: [1, 4, 7, "*"],
    }

    let currentpushposition = ["*", "#"]; // 왼손 , 오른손 , 눌러야할 숫자 

    for (let pushnumber of numbers) { // 눌러야할 숫자들 (차례대로) // in Vs of 차이 ... in은 객체 순환할 때 , of는 배열 순환할 때 
        console.log("number :: " + pushnumber);
        currentpushposition[2] = pushnumber; // 숫자 누름
        for (let finger in fingerposition) {
            if (fingerposition[finger].indexOf(currentpushposition[2]) > -1) { // 키패드를 누른 손가락의 위치
                if (finger.includes("left")) { // 왼쪽손가락범위에 포함된다면
                    currentpushposition[0] = pushnumber;
                    answer += "L";
                } else if (finger.includes("right")) { // 오른쪽손가락범위에 포함된다면
                    currentpushposition[1] = pushnumber;
                    answer += "R";
                } else {
                    // 가운데 위치에 있다면 // 키패드 위치에서 계산 // 키패드의 위치를 눕혔다고 생각
                    // both 위치로 가기 위해서는 +1의 무조건적인 위치 이동이 필요 
                    let leftdistance = 0;
                    let rightdistance = 0;


                    if (fingerposition.bothposition.indexOf(currentpushposition[0]) > -1 && fingerposition.bothposition.indexOf(currentpushposition[1]) > -1) {
                        console.log("현재 누른 푸쉬 배열에 첫번째,두번째 값이 가운데 손가락 배열에 있음");
                        leftdistance = Math.abs(fingerposition.bothposition.indexOf(currentpushposition[0]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 왼손 인덱스
                        rightdistance = Math.abs(fingerposition.bothposition.indexOf(currentpushposition[1]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 오른손 인덱스
                    }
                    else if (fingerposition.bothposition.indexOf(currentpushposition[0]) > -1) { // 현재 첫번째 위치의 인덱스값이 both에 있다면
                        console.log("현재 누른 푸쉬 배열에 첫번째 값이 가운데 손가락 배열에 있음");
                        leftdistance = Math.abs(fingerposition.bothposition.indexOf(currentpushposition[0]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 왼손 인덱스
                        rightdistance = Math.abs(fingerposition.rightposition.indexOf(currentpushposition[1]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 오른손 인덱스
                        if (fingerposition.rightposition.indexOf(currentpushposition[1]) == fingerposition.bothposition.indexOf(currentpushposition[2])) {
                            rightdistance++;
                        }
                    }
                    else if (fingerposition.bothposition.indexOf(currentpushposition[1]) > -1) {
                        console.log("현재 누른 푸쉬 배열에 두번째 값이 가운데 손가락 배열에 있음");
                        leftdistance = Math.abs(fingerposition.leftposition.indexOf(currentpushposition[0]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 왼손 인덱스
                        rightdistance = Math.abs(fingerposition.bothposition.indexOf(currentpushposition[1]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 오른손 인덱스
                        if (fingerposition.leftposition.indexOf(currentpushposition[0]) == fingerposition.bothposition.indexOf(currentpushposition[2])) {
                            leftdistance++;
                        }
                    }

                    else {
                        console.log("현재 누른 키값이 가운데 값에 있지만 , 푸쉬 배열의 첫번째 ,두번째 값은 가운데 값에 해당하지 않음");
                        leftdistance = Math.abs(fingerposition.leftposition.indexOf(currentpushposition[0]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 왼손 인덱스
                        rightdistance = Math.abs(fingerposition.rightposition.indexOf(currentpushposition[1]) - fingerposition.bothposition.indexOf(currentpushposition[2])); // 오른손 인덱스
                    }

                    leftdistance < rightdistance ?
                        (
                            answer += 'L',
                            currentpushposition[0] = pushnumber,
                            console.log("L추가")
                        ) : leftdistance > rightdistance ?
                            (
                                answer += 'R',
                                currentpushposition[1] = pushnumber,
                                console.log("R추가")
                            ) :
                            ( // 왼손과 오른손의 거리가 같다면 
                                console.log("왼손 , 오른손 거리가 같다면"),
                                answer += hand.toUpperCase().substring(0, 1)
                            )
                }
            }
        }
    }

    return answer;
}


// test case 1 
//console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// --> "LRLLLRLLRRL"

// test case 2 
//console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
// --> "LRLLRRLLLRR"

// test case 3 
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
// --> "LLRLLRLLRL"


// ------------------------------------- 성공 --------------------------------- 

// 키패드를 누른 숫자와의 거리구하는 함수 
function getanswerdistance(currentLocation, pushingnumber) {
    let result = Math.abs(currentLocation[0] - pushingnumber[0]) + Math.abs(currentLocation[1] - pushingnumber[1]);
    return result;
}

function solution(numbers, hand) {
    var answer = '';
    let keypadobj = { // 좌표를 통한 키패드 객체
        1: [1, 1], 2: [1, 2], 3: [1, 3],
        4: [2, 1], 5: [2, 2], 6: [2, 3],
        7: [3, 1], 8: [3, 2], 9: [3, 3],
        '*': [4, 1], 0: [4, 2], '#': [4, 3]
    }

    let currentLocationLeft = [4, 1]; // 초기 왼손 좌표 
    let currentLocationRight = [4, 3]; // 초기 오른손 좌표 

    numbers.forEach(pushnumber => {
        let keypadpushingnumber = keypadobj[pushnumber]; // 현재 누른 키패드의 숫자 

        if (keypadpushingnumber[1] === 1) { // 왼손일 경우
            currentLocationLeft = keypadpushingnumber;
            answer += 'L';
        } else if (keypadpushingnumber[1] === 3) { // 오른손
            currentLocationRight = keypadpushingnumber;
            answer += 'R';
        } else { // 현재 누른 키패드의 위치를 기준으로 왼손과 오른손의 거리를 구함 
            let Leftdistance = getanswerdistance(currentLocationLeft, keypadpushingnumber);
            let Rightdistance = getanswerdistance(currentLocationRight, keypadpushingnumber);
            if (Leftdistance === Rightdistance) { // 왼손과 오른손의 거리가 똑같다면 
                if (hand === 'left') { // 주손잡이가 왼손이라면 
                    currentLocationLeft = keypadpushingnumber;
                    answer += 'L';
                } else { // 주손잡이가 오른손이라면 
                    currentLocationRight = keypadpushingnumber;
                    answer += 'R';
                }
            } else if (Leftdistance < Rightdistance) { // 왼손이더 가깝다면 
                currentLocationLeft = keypadpushingnumber;
                answer += 'L';
            }
            else { // 오른손이더 가깝다면 
                currentLocationRight = keypadpushingnumber;
                answer += 'R';
            }
        }
    })
    return answer;
}