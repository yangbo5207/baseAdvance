function fn(num) {
  // 创建一个Promise实例
  return new Promise(function (resolve, reject) {
    if (typeof num == 'number') {
      // 修改结果状态值为resolved
      resolve();
    } else {
      // 修改结果状态值为rejected
      reject();
    }
  }).then(function () {
    console.log('参数是一个number值');
  }).catch(function () {
    console.log('参数不是一个number值');
  })
}

// 修改参数的类型观察输出结果
fn('12');

// 注意观察该语句的执行顺序
console.log('next code');