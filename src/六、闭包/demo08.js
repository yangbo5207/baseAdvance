// demo02
function foo() {
  var x = 20;
  var y = 10;
  function child() {
    var m = 5;

    return function add() {
      var z = 'this is add';
      return x + y;
    }
  }

  return child();
}

foo()();