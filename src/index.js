module.exports = function reverse (n) {
    const check = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr = Array.from(String(n), Number);
    let newarr = arr.map((item => {
        if(check.includes(item)){
            return +item
        } else {
            item
        }
    }))
    return newarr.reverse().join('')
}
