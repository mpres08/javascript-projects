let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.floor(Math.random() * 11)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.floor(Math.random() * 11)
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.floor(Math.random() * 11)
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.floor(Math.random() * 11)
   }
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.floor(Math.random() * 11)
   }
};

let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];

function crewReports() {
   for (property in crew) { 
      console.log(`${crew[property].name} is a ${crew[property].species}. They are ${crew[property].age} years old and ${crew[property].weight} kilograms. Their ID is ${crew[property].astronautID}.`);
   }
}
crewReports();

function fitnessTest(arr) {
   
}
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
