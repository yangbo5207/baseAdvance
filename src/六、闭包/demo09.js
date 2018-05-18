// demo03
function foo() {
  var a = 10;

  function fn1() {
    console.log(a);
  }

  function fn2() {
    var b = 10;
    console.log(b);
  }

  fn2();
}

foo();