function divisivel(num) {
    const n = parseInt(num)
    let total = 0

    for(let i = 0; i < n; i++) {
        if (!(i % 3) || !(i % 5)) {
            total += i
        }
    }
    return total
}

console.log(divisivel(10))