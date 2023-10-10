// This acts like a private function of this module. To make it available in other modules, we need to export it

function add (a, b){
    console.log(a+b)
}

function subtract (a, b){
    console.log(a-b)
}

//module.exports = add;

// Writing separate module.exports for each fxn, will lead to overriding the value and only the last fxn would be exported
//module.exports = subtract;

module.exports = {
    add,
    subtract
}

