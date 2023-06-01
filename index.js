//FOR NODEJS

const readline = require('prompt-sync')();
function print(text) {
    console.log(text);
}

//START CODE TO SUBMIT ON CODEFORCES

const n = +readline();
//console.log(n === 2);

const A = [1,2,3,5,7,9];
let ans = [];
let x = 0;

function Check(n) {
    if (n == 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function Try(i) {
    for (let j = 0; j < A.length; j++) {
        x = x*10 + A[j];
        
        if (Check(x)) {
            if (i == n) {
                ans.push(x);
            } else {
                Try(i + 1);
            }
        }
        x = Math.floor(x/10);
    }
}

Try(1);
let text = '';
for (let i = 0; i < ans.length; i++) {
    text += ans[i] + ' ';
}
print(text.slice(0, -1));