function fn(num) {
  return new Promise(function (resolve, reject) {
    // 模拟一个请求行为，2s以后得到结果
    setTimeout(function () {
      if (typeof num == 'number') {
        resolve(num)
      } else {
        var err = num + ' is not a number.'
        reject(err);
      }
    }, 2000);
  })
    .then(function (resp) {
      console.log(resp);
    })
    .catch(function (err) {
      console.log(err);
    })
}

// 修改传入的参数类型观察结果变化
fn('abc');

// 注意观察该语句的执行顺序
console.log('next code');