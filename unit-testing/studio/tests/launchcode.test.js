// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("checks value of organziation", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });
  
  test("checks value of executive director", function() {
    expect(launchcode.executiveDirector).toBe("Jeff")
  });

  test("checks value of percentage of cool employees", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("checks value of programs offered", function() {
    let programsArray = launchcode.programsOffered
    expect(programsArray[0]).toBe("Web Development");
    expect(programsArray[1]).toBe("Data Analysis");
    expect(programsArray[2]).toBe("Liftoff");
    expect(programsArray.length).toBe(3);
  });

  test("checks if launchOutput() is divisble by 2", function() { 
    expect(launchcode.method(num)).toBe("Launch!");
  });


  test("checks if launchOutput() is ONLY divisble by 3", function() {
    expect(launchcode.method(3)).toBe("Code!");
  });

  test("checks if launchOutput() is ONLY divisble by 5", function() {
    expect(launchcode.method(5)).toBe("Rocks!");
  });

  /*
  test("checks if launchOutput() is divisble by 2", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("checks if launchOutput() is divisble by 2", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  */
});