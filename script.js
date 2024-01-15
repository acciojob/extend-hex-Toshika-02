const extendHex = (shortHex) => {
  // write your code here
	shortHex = shortHex.replace('#', '');
    if (shortHex.length === 3) {
    shortHex = shortHex[0] + shortHex[0] + shortHex[1] + shortHex[1] + shortHex[2] + shortHex[2];
  }
    return '#' + shortHex.toUpperCase();
};

// Do not change the code below.
 const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
 