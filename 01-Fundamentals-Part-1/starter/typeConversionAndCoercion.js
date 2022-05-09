/* Conversion = when [we/explicit] covert from one type to another */

    // string to number
    const inputYear = '1991';
    console.log(inputYear, inputYear + 18); // 1991 199118

    // lets convert it
    console.log(inputYear, Number(inputYear) + 18); // 1991 2009

    // convert a NaN
    console.log(typeof Number('ABDUL'), Number('ABDUL')); // number NaN

    console.log(String(23), 23);

/* Coercion = when [js/implicit] auto converts for us behind the scene */

    console.log('I am ' + 23 + 'years old'); // number is converted to string
    console.log('23' + '10' - 3); // 23103 the 3 is converted to string

    console.log('23' - '10' - 3); // = 10 string is converted to number
    console.log('3' * '3'); // = 9 string is converted to number

    let n = '1' + 1; // 11
    n = n - 1; // 11 - 1 = 10
    console.log(n);