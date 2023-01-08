module.exports = function reverse (n) {
    let x = String(Math.abs(n))
    return +(x.split("").reverse().join(""));
}


