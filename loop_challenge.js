/**
 * PRINT ODDS FROM 1 - 20
 * 
 * You wanted me to do a conditional with (i % 2 != 0), didn't ya?
 */
console.log("PRINT ODDS FROM 1 - 20")

for (var i = 1; i <= 20; i += 2)
{
    console.log(i);
}

/**
 * DECREASING MULTIPLES OF 3
 * 
 * Multiples of 3 from 100 to 0.
 */
console.log("\nDECREASING MULTIPLES OF 3")

for (var i = 100; i >= 0; i--)
{
    if (i % 3 === 0)
        console.log(i);
}

/**
 * PRINT THE SEQUENCE
 * 
 * Print this sequence: 4, 2.5, 1, -0.5, -2, -3.5
 */
console.log("\nPRINT THE SEQUENCE")

for (var i = 4; i >= -3.5; i -= 1.5)
{
    console.log(i);
}

/**
 * SIGMA
 * 
 * Add all integer values from 1-100.
 */
 console.log("\nSIGMA")

var sum = 1;

 for (var i = 2; i <= 100; i++)
 {
     sum += i;
 }

 console.log(sum);

 /**
  * FACTORIAL
  * 
  * Multiply all integer values from 1 to 12
  */
 console.log("\nFACTORIAL")

var factorial = 1;

 for (var i = 2; i <= 12; i++)
 {
     factorial *= i;
 }

 console.log(factorial);