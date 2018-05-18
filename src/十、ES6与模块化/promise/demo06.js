var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';

// 封装一个get请求的方法
function getJSON(url) {
  return new Promise(function (resolve, reject) {
    // 利用ajax发送一个请求
    var XHR = new XMLHttpRequest();
    XHR.open('GET', url, true);
    XHR.send();

    // 等待结果
    XHR.onreadystatechange = function () {
      if (XHR.readyState == 4) {
        if (XHR.status == 200) {
          try {
            var response = JSON.parse(XHR.responseText);
            //  得到正确的结果修改状态并将数据传递出去
            resolve(response);
          } catch (e) {
            reject(e);
          }
        } else {
          // 得到错误结果并抛出异常
          reject(new Error(XHR.statusText));
        }
      }
    }
  })
}

// 封装好之后，使用就很简单了
getJSON(url).then(function (resp) {
  console.log(resp);
  // 之后就是处理数据的具体逻辑
});