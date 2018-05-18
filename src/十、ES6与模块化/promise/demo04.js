function fn(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof num == 'number') {
        resolve(num)
      } else {
        var err = num + ' is not a number.'
        reject(err);
      }
    }, 2000);
  })
}

fn('abc')
  .then(function (resp) {
    console.log(resp);
  })
  .catch(function (err) {
    console.log(err);
  })

// 注意观察该语句的执行顺序
console.log('next code');