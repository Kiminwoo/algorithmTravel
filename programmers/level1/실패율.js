function solution(N, stages) {
    // N + 1 :: 마지막 스테이지까지 클리어한 사람 
    // 실패율이 같다면 , 작은 번호의 스테이지가 먼저 오도록 
    // 스테이지에 도달한 유저가 없다면 실패율은 0 
    // stages :: 참가 인원 
    // N : 스테이지 수 

    let survivalperson = stages.length; // 진행중인 전체 사람 수 
    let objanswer = {}; // 각 스테이지에 머물고 있는 사람의 수 

    for (let Stagestep = 1; Stagestep <= N; Stagestep++) { // 총 스테이지 수 
        let Stagestepperson = 0; // 각 스테이지의 사람 수 
        stages.forEach(element => {
            if (element == Stagestep) { // 스테이지에 머물고 있는 사람의 수 
                Stagestepperson++;
            }
        });
        objanswer[Stagestep] = Number(Stagestepperson / survivalperson); // 각 스테이지에서 진행중인 사람의 수 / 진행중인 전체 사람의 수 
        survivalperson -= Stagestepperson; // 진행중인 전체 사람의 수에서 스테이지에 해당하는 사람의 수를 뺌 
    }
    return Object.keys(objanswer).map(Number).sort(function (a, b) {
        return objanswer[b] - objanswer[a]
    });
}

// Ex ) testcase 1 
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))

// Ex ) testcase 2 
console.log(solution(4, [4, 4, 4, 4, 4]))