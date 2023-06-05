//Fibonacci dùng đệ quy O(2^n)
function fibonacciRecursion(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2);
}

//Fibonacci dùng quy hoạch động O(n)
function fibonacciDynamicProgramming(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}

//Fibonacci dùng quy hoạch động và tối ưu bộ nhớ bằng 2 biến
function fibonacciTwoVariable(n) {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a+b];
    }
    return b;
}

//Fibonacci dùng lũy thừa ma trận O(logn)
function matrixMultiply(a, b) {
  const c = [
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
    }
  }
  return c;
}

function matrixPower(a, n) {
  let result = [
    [1, 0],
    [0, 1],
  ];
  while (n > 0) {
    if (n % 2 === 1) {
      result = matrixMultiply(result, a);
    }
    a = matrixMultiply(a, a);
    n = Math.floor(n / 2);
  }
  return result;
}

function fibonacciMatrix(n) {
  if (n === 0) return 0;
  const q = [
    [1, 1],
    [1, 0],
  ];
  const result = matrixPower(q, n - 1);
  return result[0][0];
}

console.log(fibonacciRecursion(5));
console.log(fibonacciDynamicProgramming(5));
console.log(fibonacciTwoVariable(5));
console.log(fibonacciMatrix(5));
