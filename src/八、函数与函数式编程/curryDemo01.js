function _add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

_add(1)(2)(3);