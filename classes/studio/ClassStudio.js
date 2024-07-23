//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor (name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore);
    }

    average(){
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        sum = sum / this.scores.length;
        return Math.round(sum * 10) / 10;
    }

    status(){
        let status = "unknown";
        let averageScore = this.average();
        if (averageScore >= 90) {
            status = "Accepted!"
        } else if (averageScore >= 80) {
            status = "Reserve"
        } else if (averageScore >= 70) {
            status = "Probationary"
        } else {
            status = "Rejected"
        }
        return status;
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScore(83);
console.log(bubbaBear.scores);

console.log(merryMaltese.average());

let candidates = [bubbaBear, merryMaltese, gladGator];
for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`);
}

let testCount = 0;
while (gladGator.status() === "Probationary") {
    gladGator.addScore(100);
    testCount++;
}

console.log(`It will take at least ${testCount} tests for Glad Gator to reach "Reserve" status.`);

while (gladGator.status() === "Reserve") {
    gladGator.addScore(100);
    testCount++;
}

console.log(`It will take at least ${testCount} tests for Glad Gator to reach "Accepted" status.`);