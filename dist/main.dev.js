"use strict";

var todoContainer = document.querySelector('.todo__wrapper');
var form = document.forms[0];
var name = form.name;
var price = form.price;
var color = form.color;
var speed = form.speed;
var database = [];

function ToDo(name, color, price, speed) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.speed = speed;
}

function addToDo(e) {
  // e.preventDefault();
  var car = new Car(name.value, color.value, price.value, speed.value);
  database.push(car);
  console.log(database);
  display();
}

;

function display() {
  // todoContainer.innerHTML = "";
  var htmlContent = '';

  for (var i = 0; i < database.length; i++) {
    htmlContent += " <li class=\"todo__item\">".concat(database[i].name, " ").concat(database[i].price, " ").concat(database[i].color, " ").concat(database[i].speed, " </li>"); // let li = document.createElement('li');
    // li.innerText = database[i].name + ' ' +  database[i].price
    // todoContainer.prepend(li);
    // <li class= "todo__item"></li>
    // (database[i].name);
  }

  console.log(htmlContent);
  todoContainer.innerHTML = htmlContent;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  addToDo();
}); // let arr = [1, 6, 8 , 9 , 2];
// let result3 = arr.find(function(item) {
//     return item == 6
// })
// console.log(result);
// let arrOfObj = [{name: 'Sanjar'}, {name:'Jamshid'}]
// let newResult = arrOfObj.find(function (item){
//     return item.name == 'Sa';
// })
// console.log(newResult);

var newArr = [{
  name: 'bmw',
  price: 20000,
  color: 'black'
}, {
  name: 'nexia',
  price: 2000,
  color: 'white'
}, {
  name: 'audi',
  price: 200000,
  color: 'black'
}]; // let findItem = newArr.find(function(item) {
//     return item.name == 'nexia';
// })
// console.log(findItem);

function findName(name, arr) {
  return arr.find(function (item) {
    return item.name == name;
  });
}

var lastResult = findName('audi', newArr);
console.log(lastResult);