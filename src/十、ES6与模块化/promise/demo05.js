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

fn(20)
  .then(function (result) {
    console.log(result); //20
    return result + 1;
  })
  .then(function (result) {
    console.log(result); // 21
    return result + 1;
  })
  .then(function (result) {
    console.log(result); // 22
    return result + 1;
  })
  .then(function (result) {
    console.log(result); // 23
  })
  .then(function (result) {
    console.log(result); // undefined
  })

// 注意观察该语句的执行顺序
console.log('next code');