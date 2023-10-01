console.clear();
console.log('decodemac 1.0.0');
console.log('Dr.Kaan Gunduz - 2023 (c)');
console.log('---------------------------------');
const args = process.argv.slice(2);
let hexdate = args[0];

if (!hexdate) {
  console.log('Usage: decodemac.exe <hexdate>');
  process.exit(1);
}
if (hexdate.length != 16) {
  // add 00000000 to the end
  hexdate = hexdate + '00000000';
}

const reversed = hexdate.match(/.{2}/g).reverse().join('');
console.log('TERS\t:', reversed);

const hexToDec = (hex) => {
  return parseInt(hex, 16);
};

console.log('HEX\t:', hexToDec(reversed));

const utcDate = new Date(hexToDec(reversed) * 1000);

console.log('UTC\t:', utcDate);
