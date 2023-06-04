const prompt = require("prompt-sync")();

function Fibonacy(n) {
    if (n <= 2) return 1;
    return Fibonacy(n-1) + Fibonacy(n-2);
}


// console.log(Fibonacy(1));
// console.log(Fibonacy(2));
// console.log(Fibonacy(3));
// console.log(Fibonacy(4));
// console.log(Fibonacy(5));

let count = 0;

function HaNoiTower(countDisk, current, target, temporary) {
    if (countDisk == 1) {
        console.log(`${current} to ${target}`);
        count++;
        return;
    }
    HaNoiTower(countDisk-1, current, temporary, target);
    HaNoiTower(1, current, target, temporary);
    HaNoiTower(countDisk-1, temporary, target, current);
}

HaNoiTower(4, 'x', 'y', 'z');
console.log(count);