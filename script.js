//calculate the area
//var areaValue = (baseValue * hightValue) /2 ;
//Case 1
var triangleOne = (10 * 13) /2;
var triangleTwo = (16.5 * 20.3) /2;

console.log(triangleOne)
console.log(triangleTwo)

if (triangleOne > triangleTwo) {
    console.log(`TriangleOne has an area of ${triangleOne} cm2, 
    TriangleTwo has an area of ${triangleTwo} cm2.
    The triangle with the biggest area is TriangleOne.`)
} else if (triangleTwo > triangleOne) {
    console.log(`TriangleOne has an area of ${triangleOne} cm2, 
    TriangleTwo has an area of ${triangleTwo} cm2.
    The triangle with the biggest area is TriangleTwo.`)
} else if (triangleOne === triangleTwo) {
    console.log(`TriangleOne has an area of ${triangleOne} cm2, 
    TriangleTwo has an area of ${triangleTwo} cm2.
    The triangles are the same size.`)
}

//Case 2
var triangleThree = (16.5 * 20.3) /2;
var triangleFour = (20.3 * 16.5) /2;

console.log(triangleThree)
console.log(triangleFour)


if (triangleThree > triangleFour) {
    console.log(`TriangleThree has an area of ${triangleThree} cm2, 
    TriangleFour has an area of ${triangleFour} cm2.
    The triangle with the biggest area is TriangleThree.`)
} else if (triangleFour > triangleThree) {
    console.log(`TriangleThree has an area of ${triangleThree} cm2, 
    TriangleFour has an area of ${triangleFour} cm2.
    The triangle with the biggest area is TriangleFour.`)
} else if (triangleThree === triangleFour) {
    console.log(`TriangleThree has an area of ${triangleThree} cm2,
    TriangleFour has an area of ${triangleFour} cm2.
    The two triangles are the same size.`)
}
//Case 3
var triangleFive = (7.8 * 5.6) /2;
var triangleSix = (9.3 * 12.4) /2;

console.log(triangleFive)
console.log(triangleSix)

if (triangleFive > triangleSix) {
    console.log(`TriangleFive has an area of ${triangleFive} cm2, 
    TriangleSix has an area of ${triangleSix} cm2.
    The triangle with the biggest area is TriangleFive.`)
} else if (triangleSix > triangleFive) {
    console.log(`TriangleFive has an area of ${triangleFive} cm2, 
    TriangleSix has an area of ${triangleSix} cm2.
    The triangle with the biggest area is TriangleSix.`)
} else if (triangleFive === triangleSix) {
    console.log(`TriangleFive has an area of ${triangleFive} cm2,
    TriangleSix has an area of ${triangleSix} cm2.
    The two triangles are the same size.`)
}


 //OBS!In JavaScript, the functions wrapped with parenthesis for wraps it code inside a function scope and decrease clashing with other libraries.
