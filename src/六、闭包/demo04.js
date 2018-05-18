// demo04
var name = "window";

var p = {
  name: 'Perter',
  getName: function () {
    return function () {
      return this.name;
    }
  }
}

var getName = p.getName();
var _name = getName();
console.log(_name);