import animals, { useAnimals } from "./data";

console.log(animals);

const [cat, dog] = animals;
// var cat = animals[0];
console.log(cat);

// const {name, sound} = cat;

// console.log(sound);
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//using different names for different objects' properties
// const {name:catName, sound:catSound} = cat;
// console.log(catSound);

// const {name:dogName, sound:dogSound} = dog;
// console.log(dogSound);


//providing different values to objects
// const {name = "fluffy", sound = "purr"} = cat;
// console.log(name);


//destructuring nested data
// const {name, sound, feedingRequirements : {food, water}} = cat; 

// console.log(food);
// console.log(food);

//dont need to destructed it for all as well like- 
// const {feedingRequirements : {food, water}} = cat; 
// console.log(food);






















// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
