// 高阶函数demo

// 声明一个被遍历的数据array
var array = [1, 2, 3, 4];

// map方法第一个参数为一个回调函数，该函数拥有三个参数
// 第一个参数表示array数组中的每一项
// 第二个参数表示当前遍历的索引值
// 第三个参数表示数组本身
// 该函数中的this指向为map方法的第二个参数，若该参数不存在，则this指向丢失
var newArray = array.map(function (item, i, array) {
  console.log(item, i, array, this); // 可运行查看每一项参数的具体值
  return item + 1;
}, { a: 1 })

// newArray为一个新数组，由map遍历的结果组成
console.log(newArray); // [2, 3, 4, 5]



// 自定义map方法
Array.prototype._map = function (fn, context) {
  // 首先定义一个数组来保存每一项的运算结果，最后返回
  var temp = [];
  if (typeof fn == 'function') {
    var k = 0;
    var len = this.length;
    // 封装for循环过程
    for (; k < len; k++) {
      // 将每一项的运算操作丢进fn里，利用call方法指定fn的this指向与具体参数
      temp.push(fn.call(context, this[k], k, this))
    }
  } else {
    console.error('TypeError: ' + fn + ' is not a function.');
  }

  // 返回每一项运算结果组成的新数组
  return temp;
}

var newArr = [1, 2, 3, 4]._map(function (item) {
  return item + 1;
})
// [2, 3, 4, 5]