var createCounter = function(n) {

    return function() {
        return n++
    }
}

var counter = createCounter(0)
console.log(counter())
console.log(counter())
console.log(counter())

var counter2 = createCounter(5)
console.log(counter2())
console.log(counter())
console.log(counter2())