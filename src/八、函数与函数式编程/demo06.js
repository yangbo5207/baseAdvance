// 高阶函数withLogin，用来判断当前的用户状态
(function () {

  // 用随机数的方式来模拟一个获取用户信息的方法
  var getLogin = function () {
    var a = parseInt(Math.random() * 10).toFixed(0));
    if (a % 2 == 0) {
      return { login: false }
    }

    return {
      login: true,
      userinfo: {
        nickname: 'jake',
        vip: 11,
        userid: '666666'
      }
    }
  }

  var withLogin = function (basicFn) {
    var loginInfo = getLogin();

    // 将loginInfo以参数的形式传入基础函数中
    return basicFn.bind(null, loginInfo);
  }

  window.withLogin = withLogin;
})();