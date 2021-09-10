// Assignment Code - original
var generateBtn = document.querySelector("#generate");

//my add on
const uppeCase = [ABCDEFGHUJKLMNOPQRSTUVWXYZ]
const lowerCase = [abcdefghijklmnopqrstuvwxyz]
const special = ["!@#$%&*?:;+"]
const number = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






example - this point on add
var characterAmount;
var upperCase;
var lowerCase;
var specialCase;
var upper = ["A","B","C","D","E","F","G",'H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ["a", "b","c","d","e","f","g","h","i","j",'k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ["!","@","#","$","%","&","*","?",">","<","+"];
var number = ["0","1","2","3","4","5","6","7","8","9"]

var generateBtn = document.querySelector("#generate");//orginal

function characterCount() {
  characterAmount = prompt(
    "Choose between 8-128 characters for your Password",
    "8"
  );
  if (characterAmount < 8 || characterAmount > 128) {
    alert("Please pick a valid amount");
//     return;
  } else {
    specifications();
  }
}

function specifications() {
  upperCase = confirm("Should it include an UPPERCASE?");
  lowerCase = confirm("Should it include a LOWERCASE?");
  specialCase = confirm("Should it include a SPECIAL CHARACTERS?");//edited
  numberCase = confirm("Should it include a NUMBER?");//added

  if (upperCase !== true && lowerCase !== true && specialCase !== true && numberCase != true) {
    alert("Please choose at least one option.");
    specifications();
  } else {
    password();
  }
}
//here
function password() {
  var truespecs = upperCase + lowerCase + specialCase + numberCase;
  var divider = characterAmount / truespecs;
  var generated = [];
  if (upperCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * upper.length);
      var randomValue = upper[randomIndex];
      generated.push(randomValue);
    }
  }
  if (lowerCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * lower.length);
      var randomValue = lower[randomIndex];
      generated.push(randomValue);
    }
  }
  if (specialCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * special.length);
      var randomValue = special[randomIndex];
      generated.push(randomValue);
    }
  }
  if (numberCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * number.length);
      var randomValue = number[randomIndex];
      generated.push(randomValue);
    }
  }
  shuffleArray(generated);
}

function shuffleArray(generated) {
  for (var i = generated.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = generated[i];
    generated[i] = generated[j];
    generated[j] = temp;
  }
  var password = generated.join("");
  writePassword(password);
}
//original
function writePassword(password) {
  var passwordText = document.getElementById("password");
  passwordText.innerText = password;
}
generateBtn.addEventListener("click", characterCount);




other example type here

function getRandomLower(){
    const lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random()* lower.length)];
}
const upper = "ABCDEFGHUJKLMNOPQRSTUVWXYZ"

const special = "!@#$%&*?><+"
const number = "0123456789"







// what was on my page up to now

// Assignment Code - original
var generateBtn = document.querySelector("#generate");

//variable characters
// var upper = ["A","B","C","D","E","F","G",'H','I','J','K',
//   'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var lower = ["a", "b","c","d","e","f","g","h","i","j",'k','l',
//   'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var special = ["!","@","#","$","%","&","*","?",">","<","+"];
// var number = ["0","1","2","3","4","5","6","7","8","9"]

//function prompt length of characters
var characters;
function characterLength(){
  character = prompt ("Choose between 8-128 characters for your Password", "8");
  if (character < 8 || character >128 ) {
    alert ("You MUST pick an amount between 8 and 128"); return;
  } else {
    prompts();
  }
};
// prompts all in one function
var upCase;
var loCase;
var spCase;
var nuCase;
function prompts(){
  upCase = confirm("Should it include an UPPERCASE");
  loCase = confirm("Should it include an LOWERCASE");
  spCase = confirm("Should it include an SPECIAL CHARACTER");
  nuCase = confirm("Should it include an NUMBER");
 if (upCase !== true && loCase !== true && spCase !== true && nuCase !== true){
   alert ("Must choose at least one option"); upCase();
 } else {
   generatePassword()
 }
};
//Getting randoms
const randomFunction = {
  upper: upRandom,
  lower: loRandom,
  special: spRandom,
  number: nuRandom,
}
//individual functions
function upRandom (){
  const upper = "ABCDEFGHUJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random()* upper.length)];
}
function loRandom (){
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return upper[Math.floor(Math.random()* upper.length)];
}
function spRandom (){
  const special = "!@#$%&*?><+";
  return upper[Math.floor(Math.random()* upper.length)];
}
function nuRandom (){
  const number = "0123456789";
  return upper[Math.floor(Math.random()* upper.length)];
}

function generatePassword(upper, lower, special, number, characters){

  
}

// // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", characterLength);




// console.log (prompts);
// const resultEL = document.getElementById('result');


// generateBtn.addEventListener("click", ()=> {
//   const length = characterLength.value;
//   const upTrue = upCase.checked;
//   const loTrue = loCase.checked;
//   const spTrue = spCase.checked;
//   const nuTrue = nuCase.checked;
// })

// function generatePassword  (upper, lower, special, number, length){
//   let generatePassword = "";

//   const typesCount = upper + lower + special + number;
//   const typesArr = [{upper},{lower},{special},{number}].filter(
//     item => Object.value(item)[0]
//   );
//   if(typesCount ===0){
//     return '';
//   } 
//   for(let i=0, i<length, i += typesCount){
//     typesArr.forEach (type => {
//       const funcName = Object.keys(type)[i];
//       generatePassword += randomFunc[funcName]();
//     })
//   }
//   const finalPassword = generatePassword.slice(0,length)
//   return finalPassword
//   console.log ('typescou', typesCount)
// };