let A = (function () {
  let i = 0;
  return _ => i++;
})();
console.log(A())
console.log(A())