// Randomizes three numbers in range (0.. 100) and prints the largest one
function sol1() {
    var x, y, z;

    // Math.random() returns a random number between 0 and 1. We can get a
    // random number within any range by multiplying the value with our top limit.
    // It's also possible to add an offset so bottom limit will be larger than 0.
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    z = Math.floor(Math.random() * 100);

    if ( x > y && x > z ) {
        console.log(String(x) + " Is the largest");
    } else if ( y > x && y > z ) {
        console.log(String(y) + " Is the largest");
    } else if ( z > x && z > y ) {
        console.log(String(z) + " Is the largest");
    } else {
        // Can you think of values to x,y and z that will lead here ?
        console.log("No single value is the largest");
    }
}

// Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.
function sol2() {
    var n = Math.floor(Math.random() * 100);

    for ( var i=0; i < n; i += 2 ) {
        console.log(i);
    }
}

// Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one
function sol3() {
    var n = Math.floor(Math.random() * 100);

    for ( var i=40; i < n; i += 1 ) {
        console.log(i);
    }
}

// Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one.
// If the number was smaller than 40, print all the numbers down to the randomized one
// (i.e. if the result was 37, you should print: 40, 39, 38, 37)
function sol4() {
    var n = Math.floor(Math.random() * 100);
    var i;

    if ( n > 40 ) {
        for ( i=41; i < n; i += 2 ) {
            console.log(i);
        }
    } else {
        for ( i=39; i > n; i -= 2 ) {
            console.log(i);
        }
    }
}

// Randomizes a number n in range 0..100. Now randomizes n more numbers in that range, printing the largest of them.
function sol5() {
    var n   = Math.floor(Math.random() * 100);
    var max = 0;

    for ( var i=0; i < n; i += 1 ) {
        var next = Math.floor(Math.random() * 100);

        if ( next > max ) {
            max = next;
        }
    }

    console.log(max);
}


// Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits.
// For instance, if the randomized number was 1049, program should print 14

function sum_of_digits(n) {
    // By defining a function, we save the trouble of writing the same
    // functionality twice for both 6 and 7.
    var sum = 0;

    while ( n > 0 ) {
        var digit = n % 10;
        n = Math.floor ( n / 10 );

        sum += digit;
    }
    return sum;
}

function sol6() {
    var n = Math.floor( Math.random() * 9000 ) + 1000;
    var sum = sum_of_digits(n);

    console.log( "Number is " + String(n) );
    console.log( "Sum of Digits = " + String(sum) );
}

// Randomizes a number (range 1000..9999) and calculate the sum of its digits repeatedly
// until you reach one digit only. For instance, if the randomized number was 1049, program should print 5
function sol7() {
    var n = Math.floor( Math.random() * 9000 ) + 1000;
    console.log("Number is: " + String(n));

    while ( n > 10 ) {
        n = sum_of_digits(n);
    }

    console.log("Sum is: " + String(n));
}

function sol8() {
    var x = Math.floor( Math.random() * 100 );
    var y = Math.floor( Math.random() * 100 );

    console.log('x = ' + String(x) + '; y = ' + String(y));

    for ( var i=2; i < Math.min(x, y); i += 1 ) {
        // The modulus operator returns the remainder after division.
        // It's perfect when we need to check if a number is divisable
        // by another number (remainder is 0)
        if ( ( x % i === 0) && ( y % i === 0 ) ) {
            // found it
            console.log(i);
            return;
        }
    }
    console.log('Nothing Found');
}


