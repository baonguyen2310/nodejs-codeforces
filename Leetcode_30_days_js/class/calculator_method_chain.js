class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value == 0) {
            this.result = "Division by zero is not allowed"
            return this
        }
        this.result /= value
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value)
        return this
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result        
    }
}


var actions = ["Calculator", "add", "subtract", "getResult"]
var values = [10, 5, 7]
console.log(new Calculator(10).add(5).subtract(7).getResult()) // 10 + 5 - 7 = 8