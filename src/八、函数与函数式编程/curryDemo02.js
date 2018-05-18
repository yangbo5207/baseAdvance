// arity 用来标记剩余参数的个数
// args 用来收集参数
function createCurry(func, arity, args) {
  // 第一次执行时，并不会传入arity，而是直接获取func参数的个数 func.length
  var arity = arity || func.length;

  // 第一次执行也不会传入args，而是默认为空数组
  var args = args || [];

  var wrapper = function () {

    // 将wrapper中的参数收集到args中
    var _args = [].slice.call(arguments);
    [].push.apply(args, _args);

    // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
    if (_args.length < arity) {
      arity -= _args.length;
      return createCurry(func, arity, args);
    }

    // 参数收集完毕，则执行func
    return func.apply(func, args);
  }

  return wrapper;
}