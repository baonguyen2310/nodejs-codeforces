// function pow(a, n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * a;
//     }
//     return result;
// }

function pow(a, n) {
    if (n == 1) {
        return a;
    }
    const temp = pow(a, Math.floor(n/2));
    if (n % 2 == 0) {
        return temp*temp;
    } else {
        return temp*temp*a;
    }
}

console.log(pow(2,1000));
