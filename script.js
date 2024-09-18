// const rectangle = {
//     name: "rect1",
//     width: 10,
//     height: 10,
//     area: function() {return this.width * this.height;},
// };

// //console.log(rectangle.area())

// //------------------Constructor Functions------------------------//
// function Rectangle(name, width, height){
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function(){
//         return this.height * this.width
//     }
// }

// // a new empty object is created
// const rectangle1 = new Rectangle('rectangle 1', 10, 10);
// console.log(rectangle1.area())

// //------------------Literals vs Built in Constructors------------------------//
// const strLit = 'Hello';
// const strObj = new String('Hello');

// //building literals 
// // here we just build a number literal
// const numLit =20;

// //creating a number object with Built in Constructors
// const numObj = new Number(20);
// const strObj2 = new String('hello');
// const arrObj = new Array([1,2,3]);
// const funcObj = new Function('x', 'return x+x');
// const obj2 = new Object();


// //------------------Working with Object Properties------------------------//
// function Rectangle(name, width, height){
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function(){
//         return this.width * this.height;
//     };
// }

// const rect1 = new Rectangle("reactangle 1", 20, 30);
// const rect2 = new Rectangle('rectangle 2', 12 , 21);

// //adding properties 
// rect1.color = 'red';
// rect2.perimeter = () => 2*(rect2.width + rect2.height)

// //delete properties
// delete rect2.perimeter;

// //check for properties
// rect1.hasOwnProperty('color'); //false

// //get keys
// Object.keys(rect1)

// //get values
// Object.values(rect1)

// //get enteries 
// Object.entries(rect1) //gives us an array or arrays key: [array] 0:['name':'reactangle 1] etc...

// // just logging all the keys with there value that are not functions(logging all the properties)
// for (let [key, value] of Object.entries(entries)){
//     if(typeof value !== 'function'){
//         console.log(`${key}-${value}`)
//     }
// }

// //------------------Prototypes and Prototype Chain------------------------//
// // prototypes are special types of objects where we can add methods and properties 
// // prototype chain is properties/methods in the object like toString, hasOwnProperty, etc.

// Object.getPrototypeOf(rect1); 

// //------------------Adding Methods to the Prototype------------------------//
// Rectangle.prototype.area = function (){
//     return this.width * this.height
// }

// //------------------------------------Object Create------------------------//
// const rectanglePrototypes = {
//     area: function (){ return this.width * this.height},
//     perimeter: function(){ return 2* (this.width + this.height)},
//     isSquare: function(){ this.height === this.width },
// }

// // using Object.create
// function createRectangle(height, width){
//     return Object.create( rectanglePrototypes, {
//         height: {
//             value: height
//         },
//         width:{
//             value: width,
//         }
//     });
// }

// //----------------------------------prototypical inheritance------------------------//
// function Shape(name){
//     this.name = name;
// }

// //call method to pass in the context of this for the object of shape
// function Rectangle(name, height, width){
//     Shape.call(this, name);

//     this.width = width;
//     this.height = height;
// }

//-----------------------------------OOP GAME CHALLENGE-------------------------------------//
function Player(name){
    this.name = name;
    this.level = 1;
    this.points = 0;
}

Player.prototype.gainXP = function(xp){
    this.point += xp;

    if(this.point >= 10){
        this.level ++;
        this.points -= 10;
    }
}

Player.prototype.describe = function (){
    return `${this.name} is level ${this.level} with ${this.points} experience points`
}

const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXP(4);
player2.gainXP(7);

console.log(player1.describe());
console.log(player2.describe());