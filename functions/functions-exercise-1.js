function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += "#";
    }
    return line;
}
console.log(makeLine(5));

console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");

function makeSquare(width, height) {
    let square = "";
    for (let i = 0; i < height; i++) {
        square += makeLine(width) + "\n";
    }
    return square;
}
console.log(makeSquare(5, 5));

console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");

function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width) + "\n";
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));

console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");

function makeDownwardStairs(height) {
    let downwardStairs = "";
    for (let i = 0; i < height; i++) {
        downwardStairs += makeLine(i+1) + "\n";
    }
    return downwardStairs.slice(0, -1);
}
console.log(makeDownwardStairs(5));

console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");

function makeSpaceLine(numSpaces, numChars) {
        let spaces = " ".repeat(numSpaces);
        let chars = "#".repeat(numChars);
    return spaces + chars + spaces;
}
console.log(makeSpaceLine(3, 5));

console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");

function makeIsoscelesTriange(height) {
    let triangle = "";
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + "\n");
    }
    return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriange(5));

console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+");

function makeDiamond(height) {
    let diamond = "";
    for (let i = 0; i < height; i++) {
        makeIsoscelesTriange;
    }
    return diamond.slice(0, -1);
}
console.log(makeDiamond(5));