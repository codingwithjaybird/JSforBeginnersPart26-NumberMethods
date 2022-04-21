// NUMBER METHODS

// toFixed()
let a = 5.8272;
console.log(a);
console.log(a.toFixed(1));
console.log(a.toFixed(0));
console.log(a.toFixed(5));

// toExponential()
let b = 2.235;
console.log(b.toExponential(0));
console.log(b.toExponential(1));
console.log(b.toExponential(6));

// toString()
let c = 345;
let d = 123;
let ans1 = c.toString();
console.log(ans1);
let ans2 = d.toString();
console.log(ans2);
console.log(c + d);
console.log(ans1 + ans2);
console.log((20 + 30).toString());

// toPrecision()
let e = 12.468;
console.log(e.toPrecision());
console.log(e.toPrecision(3));
console.log(e.toPrecision(6));


// valueOf()
let f = 897;
console.log(f.valueOf());
console.log((28 + 12).valueOf());

// Number()
console.log(Number("5"));
console.log(Number("   7   "));
console.log(Number("1.34"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("Web Design"));
console.log(Number("3,68"));


// parseInt()
console.log(parseInt("5.2"));
console.log(parseInt("-12"));
console.log(parseInt("6 8"));

// parseFloat()
console.log(parseFloat("2.34"));
console.log(parseFloat("1 3 5"));
console.log(parseFloat("10.2 students"));
console.log(parseFloat("students"));