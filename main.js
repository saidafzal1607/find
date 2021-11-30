const  todoContainer = document.querySelector('.todo__wrapper');
const form = document.forms[0];
const name = form.name;
const price = form.price;
const color = form.color;
const speed = form.speed;
const database = [];

function ToDo(name, color, price, speed ){
    this.name = name;
    this.color = color;
    this.price = price;
    this.speed = speed;
}

function addToDo(e) {
    // e.preventDefault();

    let car = new Car(name.value, color.value, price.value, speed.value);
    database.push(car);
    console.log(database);
    display();

};

function display(){
    // todoContainer.innerHTML = "";
    let htmlContent = '';
    for(let i = 0; i < database.length; i++){

        htmlContent += ` <li class="todo__item">${database[i].name} ${database[i].price} ${database[i].color} ${database[i].speed} </li>`

        // let li = document.createElement('li');
        // li.innerText = database[i].name + ' ' +  database[i].price
        // todoContainer.prepend(li);
        // <li class= "todo__item"></li>

        // (database[i].name);
    }
    console.log(htmlContent);
    todoContainer.innerHTML = htmlContent;
}

form.addEventListener('submit', function(event) {
    event.preventDefault()
    addToDo()
})


// let arr = [1, 6, 8 , 9 , 2];
// let result3 = arr.find(function(item) {
//     return item == 6
// })
// console.log(result);


// let arrOfObj = [{name: 'Sanjar'}, {name:'Jamshid'}]
// let newResult = arrOfObj.find(function (item){
//     return item.name == 'Sa';
// })
// console.log(newResult);

let newArr = [{name:'bmw', price:20000, color:'black'},{name:'nexia', price:2000, color:'white'},{name:'audi', price:200000, color:'black'}];
// let findItem = newArr.find(function(item) {
//     return item.name == 'nexia';
// })
// console.log(findItem);

function findName (name, arr) {
    return arr.find(function(item){
        return item.name == name ;
    })
}

let lastResult = findName('audi', newArr);
console.log(lastResult);