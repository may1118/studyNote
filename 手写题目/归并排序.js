function mergeSort(arr) {
  if (arr === null) return 0;
  let cArr = [];

  sort(arr, 0, arr.length - 1, cArr);
  console.log(arr)

  function sort(arr, left, right, cArr) {
    if (left < right) {
      let mid = Math.floor((left + right) / 2);
      sort(arr, left, mid, cArr);
      sort(arr, mid + 1, right, cArr);
      merge(arr, left, mid, right, cArr);
    }
  }

  function merge(arr, left, mid, right, cArr) {
    let i = left;
    let j = mid + 1;
    let t = 0;
    while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
        cArr[t++] = arr[i++];
      } else {
        cArr[t++] = arr[j++];
      }
    }
    while (i <= mid) {
      cArr[t++] = arr[i++];
    }
    while (j <= right) {
      cArr[t++] = arr[j++];
    }
    t = 0;
    while (left <= right) {
      arr[left++] = cArr[t++];
    }
  }
}
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 0]))