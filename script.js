//console.log(2+4)

// node is a runtime env for js outside browser. It does not offer the functionality of window object
//console.log(document)

// This will throw error as add is in separate module
//add(2, 3)

// ./ depicts current working directory
//const math = require("./math")
//console.log(math.addFxn(2, 3))


const {add, sub} = require("./math")

add(2, 3)
