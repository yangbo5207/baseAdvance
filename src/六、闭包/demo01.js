// demo01
function foo() {
  var a = 20;
  var b = 30;

  function bar() {
    return a + b;
  }

  return bar;
}

var bar = foo();
bar();