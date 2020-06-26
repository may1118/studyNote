// 快排
var quickSort = function (arr) {
  if (arr.length <= 1) return arr;
  var midIndex = Math.floor(arr.length / 2);
  var [mid] = arr.splice(midIndex, 1);
  var left = [],
    right = [];
  for (let val of arr) {
    if (val < mid) {
      left.push(val)
    } else {
      right.push(val);
    }
  }
  return quickSort(left).concat([mid], quickSort(right));
}
console.log(quickSort([85, 24, 63, 45, 17, 31, 96, 50]))