// 获取目标元素对象
var autumn = document.querySelector('.autumn');

// 声明2个变量用来保存鼠标初始位置的x，y坐标
var startX = 0;
var startY = 0;

// 声明2个变量用来保存目标元素初始位置的x，y坐标
var sourceX = 0;
var sourceY = 0;

// 获取当前浏览器支持的transform兼容写法
function getTransform() {
  var transform = '',
    divStyle = document.createElement('div').style,
    _transforms = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform'],
    i = 0,
    len = _transforms.length;

  for (; i < len; i++) {
    if (_transforms[i] in divStyle) {
      // 找到之后立即返回，结束函数
      return transform = _transforms[i];
    }
  }

  // 如果没有找到，就直接返回空字符串
  return transform;
}

// 获取元素属性
function getStyle(elem, property) {
  // ie通过currentStyle来获取元素的样式，其他浏览器通过getComputedStyle来获取
  return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(elem, false)[property] : elem.currentStyle[property];
}

// 获取元素的初始位置
function getTargetPos(elem) {
  var pos = { x: 0, y: 0 };
  var transform = getTransform();
  if (transform) {
    var transformValue = getStyle(elem, transform);
    if (transformValue == 'none') {
      elem.style[transform] = 'translate(0, 0)';
      return pos;
    } else {
      var temp = transformValue.match(/-?\d+/g);
      return pos = {
        x: parseInt(temp[4].trim()),
        y: parseInt(temp[5].trim())
      }
    }
  } else {
    if (getStyle(elem, 'position') == 'static') {
      elem.style.position = 'relative';
      return pos;
    } else {
      var x = parseInt(getStyle(elem, 'left') ? getStyle(elem, 'left') : 0);
      var y = parseInt(getStyle(elem, 'top') ? getStyle(elem, 'top') : 0);
      return pos = {
        x: x,
        y: y
      }
    }
  }
}

// 设置元素的初始位置
function setTargetPos(elem, pos) {
  var transform = getTransform();
  if (transform) {
    elem.style[transform] = 'translate(' + pos.x + 'px, ' + pos.y + 'px)';
  } else {
    elem.style.left = pos.x + 'px';
    elem.style.top = pos.y + 'px';
  }
  return elem;
}


// part3: 声明三个事件的回调

autumn.addEventListener('mousedown', start, false);

// 绑定在mousedown上的回调，event为传入的事件对象
function start(event) {
  // 获取鼠标初始位置
  startX = event.pageX;
  startY = event.pageY;

  // 获取元素初始位置
  var pos = getTargetPos(autumn);

  sourceX = pos.x;
  sourceY = pos.y;

  // 绑定
  document.addEventListener('mousemove', move, false);
  document.addEventListener('mouseup', end, false);
}

function move(event) {
  // 获取鼠标当前位置
  var currentX = event.pageX;
  var currentY = event.pageY;

  // 计算差值
  var distanceX = currentX - startX;
  var distanceY = currentY - startY;

  // 计算并设置元素当前位置
  setTargetPos(autumn, {
    x: (sourceX + distanceX).toFixed(),
    y: (sourceY + distanceY).toFixed()
  })
}

function end(event) {
  document.removeEventListener('mousemove', move);
  document.removeEventListener('mouseup', end);
  // do other things
}