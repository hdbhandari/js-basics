var a = "Global Scope a"

function setA() {
  var a = "Local Scope of a"
  // console.log("A's value from withing the function setA() is: ", a)
}

console.log(a)
// Even after calling and setting value of a, it is picking global value only
setA()
console.log(a)
// console.log(this.a) // will work in Browser only
// console.log(window.a)  // will work in Browser only
