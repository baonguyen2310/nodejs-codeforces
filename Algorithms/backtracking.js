const costMatrix = [
    [0,3,2,1],
    [3,0,1,2],
    [2,1,0,4],
    [1,2,4,0]
];

//console.log(costMatrix[0,0])
//console.log(costMatrix[0][0])

const n = 4;
const Free = new Array(4).fill(true);
const X = new Array(4);
let bestWay = new Array(4);
const T = new Array(4).fill(0);
let minSpending = Number.MAX_SAFE_INTEGER;
X[0] = 0;
Free[0] = false;

function Try(i) {
    for (let j = 1; j <= 3; j++) {
        if (Free[j]) {
            X[i] = j;
            T[i] = T[i-1] + costMatrix[X[i-1]][j];
            // console.log('i' + i + 'j' + j);

            if (T[i] < minSpending) {
                if (i == n-1) {
                    if (T[i] + costMatrix[j][0] < minSpending) {
                        //bestWay = X; //cung ref vao 1 object X
                        bestWay = [...X];
                        minSpending = T[i] + costMatrix[j][0];
                        // console.log("update bestway");
                        // console.log(bestWay);
                        // console.log('m' + minSpending);
                    }
                } else {
                    Free[j] = false;
                    Try(i+1);
                    Free[j] = true;
                }
            }
        }
    }
}

Try(1);
console.log(bestWay);
console.log(minSpending);