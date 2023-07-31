function someThing() {
    console.log(444)

}

console.log(333)
setTimeout(() => {
    console.log(444)
}, 2000)
console.log(555)


setInterval(() => {
    console.log(+ 1)
}, 100);