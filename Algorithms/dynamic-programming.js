//Longest Increasing Subsequence - LIS
const arr = [10, 22, 9, 33, 21, 50, 41, 60];

function LIS(arr) {
    const n = arr.length;
    const L = new Array(n);
    for (let i = 0; i < n; i++) {
        L[i] = 1;
        for (let j = 0; j < i; j++) {
            if (arr[j] <= arr[i] && L[i] < L[j] + 1) {
                L[i] = L[j] + 1;
            }
        }
    }
    return Math.max(...L);
}

//console.log(LIS(arr));

//ValiA: Lấy lặp
const w = 50;
const A = [10, 20, 30];
const B = [60, 100, 120];

function ValiA (A, B, w) {
    const n = A.length;
    const F = new Array(n+1).fill(null).map(() => new Array(w+1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= w; j++) {
            if (A[i-1] <= j) {
                F[i][j] = Math.max(
                    F[i-1][j], //không chọn
                    F[i-1][j-A[i-1]] + B[i-1], //chọn trước đó, giờ không chọn lại
                    F[i][j-A[i-1]] + B[i-1] //chọn trước đó, giờ chọn lại lần nữa
                    );
            } else {
                F[i][j] = F[i-1][j];
            }
        }
    }
    return F[n][w];
}

console.log(ValiA(A, B, w));

//ValiB: Lấy không lặp
function ValiB(A, B, w) {
    const n = A.length;
    const F = new Array(n+1).fill(null).map(() => new Array(w+1).fill(0));
    //phải fill trước khi map vì undefined sẽ không được map

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= w; j++) {
            if (A[i-1] <= j ) { //lấy được món thứ i (đảm bảo chỉ số của F không âm)
                F[i][j] = Math.max(F[i-1][j], F[i-1][j-A[i-1]] + B[i-1]);
                //A[i-1] và B[i-1] là do vấn đề đầu vào A,B chỉ có n phần tử
            } else {
                F[i][j] = F[i-1][j];
            }
        }
    }
    return F[n][w];
}

console.log(ValiB(A, B, w));

