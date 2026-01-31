/*Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.
Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
Output:
['orange', 'yellow', 'green', 'blue', 'red']
*/
const colors = ["red", "blue", "green", "yellow", "orange"];
const reverseColor = [];
for (color of colors) {
  reverseColor.unshift(color);
}
console.log(reverseColor);

/////////////////////////////////////////////////////////////////

/*Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.
Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
Output:
[12, 98, 78, 46]
*/
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenArray = [];
for (even of numbers) {
  if (even % 2 === 0) {
    evenArray.push(even);
  }
}
console.log(evenArray);

//////////////////////////////////////////////////

/*Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.
Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:
'TomTimTinTik'
*/
let names = ["Tom", "Tim", "Tin", "Tik"];
let nameString = "";
for (name of names) {
  nameString += name;
}
console.log(nameString);

/////////////////////////////////////////////////////////

/*Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
Input: const statement = 'I am a hard working person'
Output:
'person working hard a am I'
*/
const statement = "I am a hard working person";
const splitStatement = statement.split(" ");
let reverseWord = "";
for (let word = splitStatement.length - 1; word >= 0; word--) {
  reverseWord += " " + splitStatement[word];
}
console.log(reverseWord.trim());

////////////////////////////////////////////////////////

/*Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
Input: [1, 2, 3]
Expected Output:
Original: [1, 2, 3] Copy: [99, 2, 3]
*/
let mainArray = [1, 2, 3];
let copyArray = [1, 2, 3];
for (num of copyArray) {
  copyArray[0] = 99;
}
console.log(copyArray);

/////////////////////////////////////////////////////////

/*Task 6
Given an array of student objects, print each student’s name and marks.
[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected output:
John scored 85
Alice scored 90
*/

let students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
const firstStd = students[0].name + " " + "scored" + " " + students[0].marks;
const secondStd = students[1].name + " " + "scored" + " " + students[1].marks;
console.log(firstStd);
console.log(secondStd);

/////////////////////////////////////////////////////////////

/*Task 7
Given a 2D array, update the value at second row first item to 99 and print the updated array.
input:
[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:
[
  [1, 2],
  [99, 4],
  [5, 6]
]
*/

let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let secondRow = nestedArray[1];
secondRow[0] = 99;
console.log(nestedArray);
