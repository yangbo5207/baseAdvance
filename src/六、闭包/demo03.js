// demo03
function add(x) {
  return function _add(y) {
    return x + y;
  }
}

add(2)(3); // 5