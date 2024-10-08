//
function maskify(str) {
  const arr = str.split('');
  const newArr = arr.slice(arr.length - 4);

  let result = '';

  for(let i = 0; i < arr.length - 4; i++) {
    result += '#';
  }

  return result.split('').concat(newArr).join('');
}

console.log(maskify('1234567890'));

