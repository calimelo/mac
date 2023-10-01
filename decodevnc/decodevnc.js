console.clear();
console.log('decodevnc 1.0.0');
console.log('Dr.Kaan Gunduz - 2023 (c)');
console.log('---------------------------------');
const args = process.argv.slice(2);
let xorkey = args[0];
if (!xorkey) {
  console.log('Please provide a hex value');
  process.exit(1);
}

//xorkey = '2606625A8BA8C5E2FF1C39567390ADCA';

const k = Buffer.from(xorkey, 'hex');

const line = '1734516E8BA8C5E2FF1C39567390ADCA';

const p = Buffer.from(line, 'hex');

let result = '';
for (let i = 0; i < k.length; i++) {
  const decrypted = String.fromCharCode(k[i] ^ (p[i] || 0));
  result += decrypted;
}
console.log('Encoded Value\t : ' + xorkey);
console.log('Decoded Value\t : ' + result);
