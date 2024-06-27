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