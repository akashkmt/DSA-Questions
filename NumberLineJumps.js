// Link: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

function kangaroo(x1, v1, x2, v2) {
  if (x1 === x2 && v1 === v2) {
    return "YES";
  }

  let jump1 = x1 + v1;
  let jump2 = x2 + v2;
  if ((x1 < x2 && v1 > v2) || (x1 > x2 && v1 < v2)) {
    while (jump1 !== jump2) {
      if ((jump1 < jump2 && v1 > v2) || (jump1 > jump2 && v1 < v2)) {
        jump1 += v1;
        jump2 += v2;
      } else {
        return "NO";
      }
    }
  }

  if (jump1 === jump2) {
    return "YES";
  }

  return "NO";
}
