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