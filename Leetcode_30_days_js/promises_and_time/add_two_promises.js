/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const num1 = await promise1
    const num2 = await promise2

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num1 + num2)
        }, 60)
    })
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then((result) => { console.log(result) })
