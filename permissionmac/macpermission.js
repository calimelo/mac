console.clear();
console.log('macpermission 1.0.0');
console.log('Dr.Kaan Gunduz - 2023 (c)');
console.log('---------------------------------');
const args = process.argv.slice(2);
const filemode = args[0];
if (!filemode) {
  console.log('Please provide a decimal number');
  process.exit(1);
}

//convert decimal to binary
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

// get the last 9 bits
var binary = dec2bin(filemode);
var last9bits = dec2bin(filemode).slice(-9);
var user = last9bits.slice(0, 3);
var group = last9bits.slice(3, 6);
var other = last9bits.slice(6, 9);

// convert binary to decimal
const userdec = parseInt(user, 2);
const groupdec = parseInt(group, 2);
const otherdec = parseInt(other, 2);

// convert decimal to permission
var userpermission = '';
var grouppermission = '';
var otherpermission = '';

function dec2permission(userdec) {
  if (userdec == 0) {
    userpermission = '---';
  } else if (userdec == 1) {
    userpermission = '--x';
  } else if (userdec == 2) {
    userpermission = '-w-';
  } else if (userdec == 3) {
    userpermission = '-wx';
  } else if (userdec == 4) {
    userpermission = 'r--';
  } else if (userdec == 5) {
    userpermission = 'r-x';
  } else if (userdec == 6) {
    userpermission = 'rw-';
  } else if (userdec == 7) {
    userpermission = 'rwx';
  }

  return userpermission;
}

userpermission = dec2permission(userdec);
grouppermission = dec2permission(groupdec);
otherpermission = dec2permission(otherdec);

console.log('File Mode\t : ' + filemode);
console.log('Binary\t\t : ' + binary);
console.log('User Perm.\t : ' + userpermission);
console.log('Group Perm.\t : ' + grouppermission);
console.log('Other Perm. \t : ' + otherpermission);
