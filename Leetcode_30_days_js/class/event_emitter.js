class MyEventEmitter {
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (this.eventList === undefined) {
            this.eventList = {}
        }
        if (this.eventList[eventName] === undefined) {
            this.eventList[eventName] = []
        }
        this.eventList[eventName].push(callback)
        const callbackId = this.eventList[eventName].length - 1

        return {
            unsubscribe: () => {
                this.eventList[eventName][callbackId] = undefined
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (this.eventList === undefined || this.eventList[eventName] === undefined) {
            return []
        } else {
            const resultList = []
            for (let i = 0; i < this.eventList[eventName].length; i++) {
                if (this.eventList[eventName][i] !== undefined) {
                    resultList.push(this.eventList[eventName][i](...args))
                }
            }
            return resultList
        }
    }
}

var emitter = new MyEventEmitter();
emitter.emit("firstEvent"); // [], no callback are subscribed yet
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
console.log(emitter.emit("firstEvent")); // [5, 6], returns the output of cb1 and cb2

var emitter = new MyEventEmitter();
var sub1 = emitter.subscribe("firstEvent", x => x + 1);
var sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [5])); // [7]