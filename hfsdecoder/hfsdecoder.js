// convert hex to date
console.clear();
console.log('hfs+decoder 1.0.0');
console.log('Dr.Kaan Gunduz - 2023 (c)');
console.log('---------------------------------');
const args = process.argv.slice(2);
const mydate = args[0];
if (!mydate) {
  console.log('Please provide a hex date');
  process.exit(1);
}
function hfsDate(hfsDate) {
  const hfsEpoch = new Date('1904-01-01 00:00:00');
  const hfsSeconds = parseInt(hfsDate, 16);
  const hfsMilliseconds = hfsSeconds * 1000;
  const hfsDateObj = new Date(hfsEpoch.getTime() + hfsMilliseconds);
  console.log('HFS+ Hex Date\t: ' + hfsDate);
  console.log('HFS+ Date\t: ' + hfsDateObj);

  return hfsDateObj;
}

hfsDate(mydate);
