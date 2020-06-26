function flatten1(arr) {
  const res = [];
  arr.forEach(item => {
    Array.isArray(item) ? res.push(...flatten(item)) : res.push(item);
  });
  return res;
}

function flatten2(arr) {
  return arr.toString().split(',').map(item => parseInt(item, 10))
}

function flatten3(arr) {
  return arr.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) ? flatten3(item) : item);
  }, []);
}

console.log(flatten3([1, 2, 3, [4, 5, 6]]));