const makeChange = (c) => {
  // your name here
	function makeChange(amount) {
  const quarters = Math.floor(amount / 25);
  amount %= 25;

  const dimes = Math.floor(amount / 10);
  amount %= 10;

  const nickels = Math.floor(amount / 5);
  amount %= 5;

  const pennies = amount;

  return { q: quarters, d: dimes, n: nickels, p: pennies };
}


};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
