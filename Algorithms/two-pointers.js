function twoPointers1() {
    const a = [1,3,6,8,10];
    const b = [2,6,7,12,14,15];
    const c = [];

    let i = 0;
    let j = 0;
    while (i < a.length || j < b.length) {
        if (j == b.length) {
            c.push(a[i]);
            i++;
        } else if (i == a.length) {
            c.push(b[j]);
            j++;
        } else {
            if (a[i] <= b[j]) {
                c.push(a[i]);
                i++;
            } else {
                c.push(b[j]);
                j++;
            }
        }
    }

    console.log(c);
}

function twoPointers2() {
    const a = [2,5,6,8,10,12,15];
    const x = 16;

    let i = 0;
    let j = a.length;
    while (i < j) {
        if (a[i] + a[j] == x) {
            console.log(a[i] + ' ' + a[j]);
            return;
        }
        if (a[i] + a[j] < x) {
            i++;
        } else {
            j--;
        }
    }
    console.log('No solution');
    return;
}

function twoPointers3() {
    const a = [2,6,5,3,6,8,9];
    const s = 20;

    let sum = 0;
    let maxSubLength = 0;
    let i = 0;
    for (let j = 0; j < a.length; j++) {
        sum += a[j]; //cộng phía sau
        while (sum > s) { //kéo i hết đoạn sai, đến khi đúng
            sum -= a[i]; // trừ phía trước
            i++;
        }
        maxSubLength = Math.max(maxSubLength, j-i+1);
    }
    console.log(maxSubLength);
}

//twoPointers1();
//twoPointers2();
twoPointers3();