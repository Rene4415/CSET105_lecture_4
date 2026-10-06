const prompt = require('prompt-sync')();
// exercise question 1:
function max(...numbers){
    let small = -Infinity;
   for(let i = 0;i < numbers.length; i++){
     if(numbers[i] > small){
        small = numbers[i];
     }
   }
   return small;
}
console.log(max(1, 22, 3, 4, 5));

// exercise question 2:
function reverse(...numbers){
   numbers = numbers.toString();
   numbers = numbers.split("")
   numbers = numbers.reverse();
   numbers = numbers.join("");
    return numbers;
}
console.log(reverse(12345));

// exercise question 3:
function capitalize(){
    let sentence = prompt("Enter any sentence to capitalize it:")
    return sentence.split("").map(char =>{
        let code = char.charCodeAt(0);
        if(code >= 97 && code <= 122){
            return String.fromCharCode(code - 32);
        }
        return char;
    }).join('');
}

console.log(capitalize());

// exercise question 4:
function invert(){
    let sentence = prompt("Enter any sentence to invert it:")
     return sentence.split("").map(char =>{
        let code = char.charCodeAt(0);
        if(code >= 97 && code <= 122){
            return String.fromCharCode(code - 32);
        }
        if(code >= 65 && code <= 90){
            return String.fromCharCode(code + 32);
        }
        return char;
    }).join('');
}

console.log(invert());

//grocerylist practice question:
let groceryList = [];
while(true){
let chooseOption = prompt("Choose an option: Add item, Search item, Remove item, Quit");
console.log(chooseOption);
if(chooseOption.toLowerCase() === "add item") {
let addItem = prompt("Add items to your grocery list:");
let present = false;
for(let i = 0; i < groceryList.length; i++){
    if(groceryList[i].toLowerCase() === addItem.toLowerCase()) {
        console.log("Item is already present");
        present = true;
        break;
    }
}
if(!present){
    groceryList.push(addItem);
}
}
if(chooseOption.toLowerCase() === "search item") {
    let searchItem = prompt("Search for an item on your grocery list:");
    let found = false;
    for(let i = 0; i < groceryList.length; i++) {
        if(groceryList[i].toLowerCase() === searchItem.toLowerCase()) {
            console.log("Found");
            found = true;
            break;
        }
    }
    if(!found) {
        console.log("Not found");
    }
}
if(chooseOption.toLowerCase() === "remove item") {
    let found = false;
    let removeItem = prompt("Enter the item to remove from your grocery list:");
    for(let i = 0; i < groceryList.length; i++) {
        if(groceryList[i].toLowerCase() === removeItem.toLowerCase()) {
            groceryList.splice(i, 1);
            console.log("Item removed");
            found = true;
            break;
        }
    }
    if(!found) {
        console.log("Item does not exist.");
    }
}
if(chooseOption.toLowerCase() === "quit") {
    break;
}
}