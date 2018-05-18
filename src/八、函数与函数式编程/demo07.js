(function () {
  var withLogin = window.withLogin;

  var renderIndex = function (loginInfo) {
    // 这里处理index页面的逻辑

    if (loginInfo.login) {
      // 处理已经登录之后的逻辑
    } else {
      // 这里处理未登录的逻辑
    }
  }

  // 对外暴露接口时，使用高阶函数包一层，来执行当前页面的登录状态的判断
  window.renderIndex = withLogin(renderIndex);
})();