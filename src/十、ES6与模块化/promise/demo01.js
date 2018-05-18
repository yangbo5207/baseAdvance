// 由服务端提供的接口
var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';
var result;

var XHR = new XMLHttpRequest();
XHR.open('GET', url, true);
XHR.send();

XHR.onreadystatechange = function () {
  if (XHR.readyState == 4 && XHR.status == 200) {
    result = XHR.response;
    console.log(result);
  }
}