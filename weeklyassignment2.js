const prompt = require('prompt-sync')();

// question 1:Student Grade Manager 

let studentGradeManager = []; //universal array
let grade = 0;
while(true) {
    let chooseOption = prompt("What would you like to do?:Add a grade,Remove a grade,Calculate the average,Find the highest grade,Print all grades,Exit ");  // allows user to choose what option they want to do
    console.log("You chose to " + chooseOption);
    if(chooseOption.toLowerCase() === "add a grade"){
        let add = Number(prompt("Add a grade:")); // adds grades to the array
         console.log(" You added a grade.");
        studentGradeManager.push(add);  //stores the grades into the array
    }
    if(chooseOption.toLowerCase() === "remove a grade") {
        let found = false;
         let remove = parseInt(prompt("Remove a grade:"));
        for(let i = 0; i < studentGradeManager.length; i++) {
        if(studentGradeManager[i] === remove) {
            studentGradeManager.splice(i, 1);  //removes the grade from the array
            console.log("Grade removed");
            found = true;
            break;
        }
    }
    if(!found) {
        console.log("Grade does not exist.");
    }
    }
    if(chooseOption.toLowerCase() === "calculate the average"){
        let sum = 0;
        for(let i = 0; i < studentGradeManager.length; i++) {
            sum += studentGradeManager[i];  // adds all grades that are in the array
        }
        let average = sum / studentGradeManager.length;    // divides the sum of all grades by the number of grades to calculate the average
            console.log("The average is:" + average);
    }
    if(chooseOption.toLowerCase() === "find the highest grade"){
        let highestGrade = Math.max(...studentGradeManager);    //finds the highest grade in the array
        console.log("The highest grade is:" + highestGrade);
    }
    if(chooseOption.toLowerCase() === "print all grades"){
        for(let i = 0; i < studentGradeManager.length; i++) {
            console.log([i+1] + "." + studentGradeManager[i]);  // prints all grades and numbers each grade
        }
    }
    if(chooseOption.toLowerCase() === "exit"){
        break;
    }
}

// question 2:Movie collection manager

let movieCollectionManager = [];   //universal array
while(true) {
    let chooseOption2 = prompt("What would you like to do?:" + "1.Add a movie" + "2.Remove a movie" +  "3.Search for a movie" +  "4.Print all movies" + "5.Count movies" + "6.Convert movie title to uppercase" + "7.Exit"); //allows user to choose what option they want to do
console.log("You chose to " + chooseOption2);
    if(chooseOption2.toLowerCase() === "add a movie"){
        let add = prompt("Add a movie:").toLowerCase();      // adds movies to array
         console.log(" You added a movie.");
        movieCollectionManager.push(add);   //stores the movies in the array
    }

    if(chooseOption2.toLowerCase() === "remove a movie") {
        let found = false;
         let remove = prompt("Remove a movie:").toLowerCase();
        for(let i = 0; i < movieCollectionManager.length; i++) {
        if(movieCollectionManager[i] === remove) {
            movieCollectionManager.splice(i, 1); //removes movie
            console.log("Movie removed");
            found = true;
            break;
        }
        }
        if(!found) {
            console.log("Movie does not exist.");
        }
    }
    if(chooseOption2.toLowerCase() === "search for a movie") {
    let searchItem = prompt("Search for a movie:");
    let found = false;
    for(let i = 0; i < movieCollectionManager.length; i++) {
        if(movieCollectionManager[i].toLowerCase() === searchItem.toLowerCase()) { //compares movie list to what the user searched for
            console.log("Movie Found!");
            found = true;
            break;
        }
    }
    if(!found) {
        console.log("Movie not found");
    }
}
if(chooseOption2.toLowerCase() === "print all movies"){
        for(let i = 0; i < movieCollectionManager.length; i++) {
            console.log([i+1] + "." + movieCollectionManager[i]); // prints movies already added and numbers each of the movies
        }
    }
    if(chooseOption2.toLowerCase() === "count movies"){
        let sum = 0;
        for(let i = 0; i< movieCollectionManager.length; i++) {
        sum += movieCollectionManager[i]
        }
        console.log("Total movies: " + movieCollectionManager.length);
    }
    if(chooseOption2.toLowerCase() === "convert movie title to uppercase"){
        function capitalize(){
    let sentence = prompt("Enter any movie title to capitalize it:")
    return sentence.split("").map(movie =>{                                //utilizes the ascii table to convert lowercase letters to uppercase
        let code = movie.charCodeAt(0);
        if(code >= 97 && code <= 122){
            return String.fromCharCode(code - 32);
        }
        return movie;
    }).join('');
}
        console.log("Capitalized movie title: " + capitalize());
    }
    if(chooseOption2.toLowerCase() === "exit"){
        break;
    }
}