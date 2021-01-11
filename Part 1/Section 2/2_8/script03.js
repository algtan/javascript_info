alert("" + 1 + 0);      // initial guess: NaN,          actual answer: 10
alert("" - 1 + 0);      // initial guess: NaN,          actual answer: -1
alert(true + false);    // initial guess: 1,            actual answer: 1
alert(6 / "3");         // initial guess: 2,            CORRECT
alert("2" * "3");       // initial guess: 6,            CORRECT
alert(4 + 5 + "px");    // initial guess: 9px,          CORRECT
alert("$" + 4 + 5);     // initial guess: $9,           actual answer: $45
alert("4" - 2);         // initial guess: 2,            CORRECT
alert("4px" - 2);       // initial guess: NaN,          CORRECT
alert(7 / 0);           // initial guess: Infinity,     CORRECT
alert("  -9  " + 5);    // initial guess: -4,           actual answer: -9 5
alert("  -9  " - 5);    // initial guess: -14,          CORRECT
alert(null + 1);        // initial guess: null,         actual answer: 1
alert(undefined + 1)    // initial guess: undefined,    actual answer: NaN
alert(" \t \n" - 2);    //intial guess: NaN,            actual answer: -2