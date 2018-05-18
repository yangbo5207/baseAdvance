function _map(func, array) {
  return array.map(func);
}

var _getNewArray = createCurry(_map);

var getNewArray = _getNewArray(function (item) {
  return item * 100 + '%'
})

getNewArray([1, 2, 3, 0.12]);   // ['100%', '200%', '300%', '12%'];
getNewArray([0.01, 1]); // ['1%', '100%']