const makeChange = (c) => {
  // your name here
	function makeChange(amount) {
  var q = Math.floor(amount / 25);
  amount %= 25;

  var d = Math.floor(amount / 10);
  amount %= 10;

  var n = Math.floor(amount / 5);
  amount %= 5;

  var p = amount;

  return { q: q, d: d, n: n, p: p };
}


};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
