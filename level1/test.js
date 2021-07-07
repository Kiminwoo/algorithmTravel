function solution(n) {

    let result = String(n).split('').reverse();
    result.forEach(function (value, index, array) {
        array[index] = Number(array[index])
    });

    return result
}