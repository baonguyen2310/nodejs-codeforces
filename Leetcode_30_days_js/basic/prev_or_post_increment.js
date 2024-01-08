// đối với for thì i++ hay ++i đều được
// đây là vấn đề syntax: ảnh hưởng trên 1 hàng

function example1() {
    let i = 5;
    return ++i; // hoặc i++
}

function example2() {
    let i = 5;
    return i++; // hoặc ++i
}

console.log(example1())
console.log(example2())