//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel = 0;
let astronautsAboard = 0;
let maxAltitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  const input = require("readline-sync");
  startingFuel = input.question("Enter the starting fuel level: ");

  while (startingFuel < 5000 || startingFuel > 30000 || isNaN(startingFuel)) {
    console.log("Invalid input")
    startingFuel = input.question("Enter the starting fuel level: ");
  }
  numStartingFuel = Number(startingFuel);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (astronautsAboard <=1 || astronautsAboard >= 7 || isNaN(astronautsAboard)) {
  console.log("Invalid input")
  astronautsAboard = input.question("Please enter the number astronauts aboard: ");
}
numAstronauts = Number(astronautsAboard);  
 
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuel - 100 * astronautsAboard >= 0) {
  maxAltitude += 50;
  startingFuel -= 100 * astronautsAboard;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${maxAltitude} km.`;

if (maxAltitude >= 2000){
  output += " Orbit achieved!";
} else {
  output += " Failed to reach orbit.";
}

console.log(output);