function Father(name) {
  this.name = name;
}
Father.prototype.getName = function () {
  return this.name;
}

function Son(name, age) {
  Father.call(this, name);
  this.age = age;
}
Son.prototype = Object.create(Father.prototype);
Son.constructor = Son;

Son.prototype.getAge = function () {
  return this.age;
}