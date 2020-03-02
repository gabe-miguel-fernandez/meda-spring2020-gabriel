var counter = 0;

while (counter < 10) {
    // code to run per loop
    // counter = counter + 1;

    // adds 1 to existing variable value
    counter++;
    // subtracts 1 from existing variable value
    // counter--; 
}

for (var counter = 0; 10 > counter; counter = counter + 1) {
    // code to run per loop
    console.log(counter);
}

var count = 1;

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        for (var k = 0; k < 10; k++) {
            console.log("running! " + count);
            count++;
        }

    }
}

for (var i = 12; i <= 60; i++ ) {
    if (i % 2) {
        console.log("number = " + (i - 12))
    }

}