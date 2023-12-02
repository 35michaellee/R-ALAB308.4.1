// Input CSV string
const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Split the string into rows using the newline character ("\n") as the delimiter
const rows = csvString.split('\n');

// Create a new array to store the rows
const dataArray = [];

// Loop through each row
for (let i = 0; i < rows.length; i++) {
  // Skip empty rows
  if (rows[i].trim() !== '') {
    // Push the row into the dataArray
    dataArray.push(rows[i]);
  }
}
console.log(rows);
console.log(dataArray);

//OR 
// Input CSV string
const csvString2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Create a new array to store the rows
const dataArray2 = [];

// Variables to keep track of the current row
let currentRow = "";
for (let i = 0; i < csvString.length; i++) {//loop through the string 
  const currentChar = csvString[i];

  // Check for newline character ("\n") to identify the end of a row USING THE LITERAL CUZ QUOTES SCREW IT UP
  if (currentChar === '\n') {
    // Skip empty rows
    if (currentRow.trim() !== '') {
      // Push the row into the dataArray
      dataArray.push(currentRow);
    }

    // Reset currentRow for the next row
    currentRow = '';
  } else {
    // Append the current character to the currentRow
    currentRow += currentChar;
  }
}

// Log the resulting array
console.log(dataArray);
//-----------Prt 2-----------

// Create a new array to store the two-dimensional array
const twoDimensionalArray = [];


// Loop through each row
let numColumns;
for (let i = 0; i < rows.length; i++) {
  // Skip empty rows
  if (rows[i].trim() === '') {
    continue;
  }

  // Split the row into cells using the comma (",") as the delimiter
  const cells = rows[i].split(',');

  // If it's the first row, dynamically determine the number of columns
  if (i === 0) {
    // Store the number of columns
    numColumns = cells.length;

    // Create the heading row
    twoDimensionalArray.push(cells);
  } else {
    // For subsequent rows, ensure they have the same number of columns as the heading row
    if (cells.length === numColumns) {
      // Push the row into the two-dimensional array
      twoDimensionalArray.push(cells);
    } else {
      console.error(`Row ${i + 1} does not have the expected number of columns.`);
    }
  }
}

// Log the resulting two-dimensional array
console.log(twoDimensionalArray);







//<>------------PART 3------->
// Create an array to store the objects
const arrayOfObjects = [];

// Extract the headings from the first row (assuming it exists)
const headings = twoDimensionalArray[0] || [];

// Loop through each row (starting from index 1 as the first row is the heading)
for (let i = 1; i < twoDimensionalArray.length; i++) {
  const row = twoDimensionalArray[i];
  const rowObject = {};

  // Loop through each cell in the row
  for (let j = 0; j < row.length; j++) {
    // Use the lowercase heading as the key and assign the corresponding cell value
    rowObject[headings[j].toLowerCase()] = row[j];
  }

  // Add the object to the array
  arrayOfObjects.push(rowObject);
}

// Log the resulting array of objects
console.log("array of objects Part 3;",arrayOfObjects);





//<------------Part 4------------------>
// Assuming that the array of objects is stored in the variable 'arrayOfObjects'

// Remove the last element from the array
arrayOfObjects.pop();

// Insert an object at index 1
const newObjectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
arrayOfObjects.splice(1, 0, newObjectAtIndex1);

// Add an object to the end of the array
const newObjectAtEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
arrayOfObjects.push(newObjectAtEnd);

// Log the updated array
console.log(arrayOfObjects);

// Calculate the average age using a loop
let totalAge = 0;
for (let i = 0; i < arrayOfObjects.length; i++) {
  // Convert age to a number and add it to the total
  totalAge += parseInt(arrayOfObjects[i].age, 10);
}

// Calculate the average age
const averageAge = totalAge / arrayOfObjects.length;

// Log the average age
console.log("Average Age:", averageAge);




//<---part 5-------->
// Assuming that the updated array of objects is stored in the variable 'arrayOfObjects'

// Create an array to store CSV rows
const csvRows = [];

// Get the headings from the first object in the array
const headings2 = Object.keys(arrayOfObjects[0]);

// Convert headings to a CSV row
const headingsRow = headings2.join(',');

// Push the headings row to the csvRows array
csvRows.push(headingsRow);

// Loop through each object in the array
for (const obj of arrayOfObjects) {
  // Get the values of the object in the same order as the headings
  const values = headings2.map(key => obj[key]);

  // Convert values to a CSV row
  const csvRow = values.join(',');

  // Push the CSV row to the csvRows array
  csvRows.push(csvRow);
}

// Join the CSV rows into a single string using the newline character
const csvString3 = csvRows.join('\n');

// Log the resulting CSV string
console.log(csvString3);

// function computerArea(w,h){
//     let str2="The area of a rectangle w "+w+ " and h " + "is "+ (w*h)
//     console.log(str2);
// }
// let w=5;
// let h=6;
// computerArea(w,h);
// let computerArea2=(w,h)=>console.log("The area of a rectangle w "+w+ " and h " + "is "+ (w*h))
// computerArea2(w,h);

// let planet1="Mars"
// function planetHasWater(planet){
//     planet.toLowerCase;
//     if(planet=="mars"||"earth"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let planetHasWater2=(p)=>(p=="Mars"||"Earth")?true:false;
       


// console.log(planetHasWater(planet1));
