function solution(s) {
    let answer = s.length;

    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let str = "";
        let cnt = 1;
        let currentStr = s.substr(0, i);
        let idx = 0;

        for (idx = i; idx <= s.length; idx += i) {
            let nextStr = s.substr(idx, i);

            if (currentStr === nextStr) {
                cnt += 1;
            } else {
                if (cnt === 1) str = str + currentStr;
                else str = str + cnt + currentStr;

                cnt = 1;
                currentStr = nextStr;
            }
        }
        if (cnt === 1) str = str + currentStr;
        else str = str + cnt + currentStr;
        answer = Math.min(answer, str.length);
    }

    return answer;
}