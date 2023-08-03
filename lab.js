// #1 
let numberOfStudents = 17;
if(numberOfStudents > 20){
    console.log("classroom too small");
}else {
    console.log("classroom size acceptable");
}
// #2 
let numberOfHouses = 5;
if(numberOfHouses > 2){
    console.log("you need to sell more houses");
}else{
    console.log("seems reasonable");
}

// #3
let bill = 20;
if(bill > 15){
    console.log("we should split the bill");
} else {
    console.log("I'll get the bill this time");
}

// #4
let score = 55;
if(score <= 55){
    console.log("Not too good");
}else if(score <= 60){
    console.log("ehhhh");
}else if(score <= 70){
    console.log("Keep trying");
}else if(score <= 80){
    console.log("nice!");
}else if(score <= 90){
    console.log("Doing good!");
}else {
    console.log("over 90! great!");
}

// #5

/* check if someone's over the drinking age */
let age = 25;
if(age < 21){
    console.log("No drinking");
}else {
    console.log("You can drink");
}

/* check if someone is proficient in Javascript */
let isJavascriptWizard = false; 
if(isJavascriptWizard){
    console.log("You're a (Javascript) wizard!");
}else{
    console.log("You are not a wizard... yet :)");
}

/* check for someone's swimming proficiency and match them to a swim class */
let swimmingLevel = "medium";

if(swimmingLevel === "beginner"){
    console.log("You're taking the minnows class");
}else if(swimmingLevel === "medium"){
    console.log("You're taking the swordfish class");
}else {
    console.log("You're taking the dolphin class");
}  