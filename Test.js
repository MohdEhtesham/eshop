
// let n = 5;
// let string = "";
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);



// console.log(typeof(NaN))


// function multiplication(x,y){
//   let a = x*y
//   console.log(a) ;
// }
// multiplication(5,6)


// let arr =[1,3,5,6,7,19]

// function findmax(arr){
//   let max =''
//   for(let i=0;i< arr.length;i++){
//      max = arr.filter(findmax(arr))
//   }
//   console.log(max) 
// }

// findmax()


const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27 },
  { firstName: "Salman", lastName: "Khan", age: 55 },
  { firstName: "Riya", lastName: "Rajput", age: 34 },
  { firstName: "Simran", lastName: "Kapoor", age: 27 },
];


 const selecteduser = users.reduce((accumulator ,currentitration)=>{
  if(accumulator==)
   
},0)
console.log(selecteduser)


// Using reduce,
// Get this Output -> ["Salman Khan", "Riya Rajput"]
// Hint -> Initial Value of Accumulator -> []
// */
// 2. Question
/*
const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27. gender: "female" },
];
Output ->
[
  {fullName: "Akshay Khurana", age: 27},
  {fullName: "Salman Khan", age: 55}
]