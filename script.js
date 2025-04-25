const makeChange = (c) => {
  // your name here
	function makeChange(amount) {
  const change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  change.q = Math.floor(amount / 25);
  amount %= 25;

  change.d = Math.floor(amount / 10);
  amount %= 10;

  change.n = Math.floor(amount / 5);
  amount %= 5;

  change.p = amount;

  return change;
}

// Example usage
console.log(makeChange(47)); // { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // { q: 0, d: 2, n: 0, p: 4 }

	

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
