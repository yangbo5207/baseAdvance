// 纯函数demo

// 传入日期，获取当天的数据
function process(date) {
  var result = '';

  // 假设这中间经历了复杂的处理过程

  return result;
}

function withProcess(base) {
  var cache = {}

  return function () {
    var date = arguments[0];
    if (cache[date]) {
      return cache[date];
    }
    return base.apply(base, arguments);
  }
}

var _process = withProcess(process);

// 经过上面一句代码处理之后，我们就可以使用_process来获取我们想要的数据，如果数据存在，会返回缓存中的数据，如果不存在，则会调用process方法重新获取。
_process('2017-06-03');
_process('2017-06-04');
_process('2017-06-05');