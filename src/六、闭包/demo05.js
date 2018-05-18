// 改动一
// demo05
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

// 利用call的方式让this指向p对象
var _name = getName.call(p);
console.log(_name);