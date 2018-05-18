var per = (function () {
  // 定义一个变量，用来保存实例
  var instance = null;
  var name = 'Jake';
  var age = 20;

  // 初始化方法
  function initial() {
    return {
      getName: function () { return name; },
      getAge: function () { return name; }
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = initial();
      }
      return instance;
    }
  }
})();

// 只在使用时获得实例
var p1 = per.getInstance();
var p2 = per.getInstance();

console.log(p1 === p2);  // true