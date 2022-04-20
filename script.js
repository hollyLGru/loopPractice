// Use a do...while loop to console.log the numbers from 1 to 1000.
let countToTen = 0;
while (countToTen <= 1000){
  countToTen = countToTen + 1;
  console.log(countToTen);
}

// Create an object (with keys and values) called person with the following data
let person = {
firstName: "Jane",
lastName: "Doe",
birthDate: "Jan 5, 1925",
gender: "female"}

// Create a function that logs out the keys of the object using Object.keys()
let keyInfo = Object.keys(person)
console.log(keyInfo)
// OR CAN DO THIS WAY:
const personsKeys = (obj) => {
    let objKeys = Object.keys(obj);
    console.log(objKeys)}

personsKeys(person)

// Create a function that logs out the keys and values of the object using Object.entries().

let keyEntries = Object.entries(person)
console.log(keyEntries)
// OR CAN WRITE LIKE THIS:
const personsEntries = (obj) => {
  let keyEntry2 = Object.entries(person)
  console.log(keyEntry2)
};

personsEntries()

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

let arrayOfPersons = [{
firstName: "Sally",
lastName: "Smith",
birthDate: "Jan 5, 1925",
gender: "female"
}, {
firstName: "Hadley",
lastName: "Grace",
birthDate: "Jan 7, 1954",
gender: "female"
}, {
  firstName: "Colin",
lastName: "Frey",
birthDate: "Aug 15, 1995",
gender: "male"
}, {
firstName: "Julie",
lastName: "Wise",
birthDate: "Nov 5, 1908",
gender: "female" 
}
                     ]
// Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.
// REDO!
const oddBday = (arr) => {
    for (let key of arr) {
        let date = parseInt(key.birthDate.slice(-4));
        if (date % 2 !== 0) {
            console.log(date);
        }
    }
};

oddBday(arrayOfPersons)

oddBirthdays(arrayOfPersons);
// Use .map() to map over the arrayOfPersons and console.log() their information.

const personInfo = arrayOfPersons.map((arrayOfPersons) => {
  return arrayOfPersons})

console.log(personInfo);

// Use .filter() to filter the persons array and console.log 0only males in the array.
const filterMales = arrayOfPersons.filter((arrayOfPersons) => {
  if (arrayOfPersons.gender == 'male')
    return arrayOfPersons;
})

console.log(filterMales);

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
const userBday = arrayOfPersons.map((arrayOfPersons) => {
  let bday =arrayOfPersons.birthDate;
  let bSplit = bday.split(" ");
  let bYear = bSplit[2];
  if (bYear < 1990) {return true}
  else {return false}
})

console.log(userBday)


// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const before1990 = arrayOfPersons.filter((arrayOfPersons) => {
  let bday =arrayOfPersons.birthDate;
  let bSplit = bday.split(" ");
  let bYear = bSplit[2];
  if (bYear < 1990) {return true}
})

console.log(before1990)

// find() from scratch !! 
// needs to take in an array and a function 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * the function should return the first element in the array "arr" that meets the 
 * criterea defined by the function "callback"
 * @param {array} arr / the array to check
 * @param {function} callBack / this function returns true for any element that meets critera 
 */
 let findScratchFunc = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++){
    let x = arr[i];
  //  needs to call the callback for every element and do something based on result
  let pass = callBack(x);
  if (pass) {return x};
    }
  }
   
  let solution = findScratchFunc(arr, function(elem) {
  if (elem % 2 == 0 ) {return true}
  })
  
  console.log(solution)

  // findIndex() from scratch
  let arrtwo = ["orange", "green", "yellow", "blue", "pink", "red"]
  let findIndexScratch = (arrtwo, callBack) => {
      for (let i = 0; i < arrtwo.length; i++) {
          let x = arrtwo[i]
      let pass = callBack(x);
          if (pass) 
              return x; 
      else {return -1}
          
      }
  };
  
  let solution2 = findIndexScratch(arrtwo, function(elem) {
  if (elem == "orange" ) {return true}
  }
                                )
  console.log(solution2);
  