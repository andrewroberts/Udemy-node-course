
const add = (value1, value2, callback) => {
    setTimeout(() => {
        callback(value1 + value2)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})