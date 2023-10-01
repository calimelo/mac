console.clear();
console.log('plistparser 1.0.0');
console.log('Dr.Kaan Gunduz - 2023 (c)');
console.log('---------------------------------');
const args = process.argv.slice(2);
let mybplist = args[0];
if (!mybplist) {
  console.log('Please provide a binary plist file value');
  process.exit(1);
}

const bplist = require('bplist-parser');
const plist = require('plist');
//read file

try {
  const fs = require('fs');
  const data = fs.readFileSync(mybplist);
  const obj = bplist.parseBuffer(data);
  if (obj.length > 0) {
    console.log(JSON.stringify(obj[0]));
    return;
  } else {
    return;
  }
} catch (e) {
  try {
    //read as xml
    const fs = require('fs');
    const xml = fs.readFileSync(mybplist, 'utf8');
    const obj = plist.parse(xml);
    console.log(JSON.stringify(obj));
  } catch (e) {
    console.log('Please provide a valid binary plist file value');
    process.exit(1);
  }
}
