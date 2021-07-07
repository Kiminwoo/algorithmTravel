function solution(nums) {
  var answer = nums.length / 2; // 최대 고를 수 있는 수
  const answerarr = []

  nums.forEach(function (element, index) { // nums 중복 제거
    if (!answerarr.includes(element)) {
      answerarr.push(element);
    }
  });
  if (answer > answerarr.length) { // 최대 선택할 수 있는 수 가 중복제거된 배열의 수보다 크다면
    answer = answerarr.length;
  }
  return answer;
}