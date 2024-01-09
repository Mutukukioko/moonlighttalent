// this = reference to a particular object the object
//        depends on the immediate context



const car1 = {
    model:"Mustang",
    color:"yellow",
    year:2023,

    drive: function (){ 
        console.log(`You drive the ${this.model}`)},
    brake: ()=> console.log("You step on the brakes")
}

car1.drive()



// object = A group of prpertise and methods
//          properties = what an object has
//          methods = what an object can do
//          use , to access propertise/methods 

// const car1 = {
//     model:"Mustang",
//     color:"yellow",
//     year:2023,

//     drive: ()=> console.log("You drive the car"),
//     brake: ()=> console.log("You step on the brakes")
// }

// const car2 = {
//     model:"Toyota",
//     color:"Red",
//     year:2023,

//     drive: ()=> console.log("You drive the car"),
//     brake: ()=> console.log("You step on the brakes")
// }

// const car3 = {
//     model:"Porche",
//     color:"Green",
//     year:2023,

//     drive: ()=> console.log("You drive the car"),
//     brake: ()=> console.log("You step on the brakes")
// }

// car3.drive()



// Maps objects that holds key-value pairs of any data type

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10],
//     ["underwear", 50]
// ])

// store.forEach((value, key) => console.log(`${key} $${value}`))








// let cards = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

// shuffle(cards);
// console.log(cards)
// function shuffle(array){
//     let currentIndex = array.length
//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length)
//         currentIndex-=1;

//         let temp = array[currentIndex]
//         array[currentIndex] = array [randomIndex]
//         array[randomIndex] = temp
//     }
//     return array
// }
