/*
for (var i = 1; i <= 48; i++ ) {
    if (!(i % 2)) {
        console.log("number = " + i)
    }

}
*/

for (var i = 12; i <= 60; i++ ) {
    if (!(i % 2) && (i - 12)) {
        console.log("number = " + (i - 12))
    }
}
console.log("----");

for (var i = 12; i <= 60; i++ ) {
    if (!(i % 2)) {
        console.log("number = " + (i - 12))
    }
}
console.log("----");

for (var i = 12; i <= 48; i = i + 2) {
    console.log("number = " + i);
}