var per = (function () {
  var name = 'Jake';
  var age = 20;

  return {
    getName: function () {
      return name;
    },

    getAge: function () {
      return age;
    }
  }
})();


// 访问私有变量
per.getName();