function solution(s) {
    var answer = 0;

    let bracket = { "]" : "[", "}" : "{", ")" : "("};
    const check_parenthesis = (str) => {
        let stack = [];
        if (bracket.hasOwnProperty(str[0]))
            return false;
        for(let i = 0; i < str.length; i++){
            stack.push(str[i]);
            let len = stack.length;
            let match = bracket[stack[len - 1]];
            if (match != undefined && match == stack[len - 2]){
                stack.pop();
                stack.pop();
            }
        }
        if (stack.length == 0)
            return true;
        else
            return false;
    }

    const rotate_string = (str) => {
        return str.substring(1) + str[0];
    }

    for(let i = 0; i < s.length; i++){
        if (check_parenthesis(s))
            answer++;
        s = rotate_string(s);
    }
    return answer;
}