// 纯函数demo

function getParams(url, param) {
  if (!/\?/.test(url)) {
    return null;
  }

  var search = url.split('?')[1];
  var array = search.split('&');

  for (var i = 0; i < array.length; i++) {
    var tmp = array[i].split('=');
    if (tmp[0] === param) {
      return decodeURIComponent(tmp[1]);
    }
  }

  return null;
}

var url = 'https://www.baidu.com/s?tn=baidu&wd=javascript&rsv_sug=1';
getParams(url, 'wd'); // javascript