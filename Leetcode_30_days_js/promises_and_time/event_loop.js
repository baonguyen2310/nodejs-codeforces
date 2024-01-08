console.log("Step 1");

setTimeout(() => {
    console.log("Step 2"); // macrotask
}, 0);

Promise.resolve().then(() => { // microtask
    console.log("Step 3");
});

console.log("Step 4");
