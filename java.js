const person = {
    name: "lars",
    job: "web-dev (perhaps next year)",
    age: 26
}
const obj_array = Object.entries(person)
console.log(obj_array)

for (props in person) {
    console.log(props, person[props])
}


console.log("_________________")
console.log(getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}))

function getObjectValues(obj) {


    // for (props in obj){
    //     helper.push(obj[props])
    // }
    helper = Object.values(obj)
    return helper
}

console.log("_________________")


const person2 = {
    name: "lars",
    job: "web-dev (perhaps next year)",
    age: 26,
    print: function () {
        console.log(this.name, "is a", this.job)
    }
}
person2.print()

console.log("_________________")

console.log(objectToArray({
    A: 1,
    B: 2,
    C: 3
}))

function objectToArray(obj) {
    return Object.entries(obj)
}
console.log("_________________")

let student = {
    name: "Mike",
    class: "4A",
    course: "English"
}

function prop_array(obj) {
    let helper = []
    for (prop in obj) {
        helper.push(prop)
    }
    return helper
}

console.log(prop_array(student))
console.log("_________________")



let first = {
    firstName: "John"
}
let last = {
    lastName: "Smith"
}

function obj_merge(obj_one,obj_two){
    let obj_three ={...obj_one, ...obj_two}
    return obj_three
}
console.log(obj_merge(first,last))
console.log("_________________")


let new_person={
    name:"john",
    job:"teacher"
}

function swap(obj){
    var obj_switch = {};
    for(var key in obj){
      obj_switch[obj[key]] = key;
    }
    return obj_switch;
  }
  console.log(swap(new_person))
  console.log("_________________")

function two_arrays(obj){
    let helper = []
    helper.push(Object.getOwnPropertyNames(obj))
    helper.push(Object.values(obj))
    return helper
}
console.log(two_arrays({ a: 1, b: 2, c: 3 }))