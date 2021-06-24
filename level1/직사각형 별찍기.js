process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  let returnvalue = "";
  for (let loop = 0; loop < b; loop++) {
    for (let startchar = 0; startchar < a; startchar++) {
      returnvalue += "*" // 별찍기
    }
    returnvalue += "\n"; // 다 찍고 한줄 띄우기
  }
  console.log(returnvalue);
});