// stack demo

var a = [];
a.push(1);         // a: [1]
a.push(2, 4, 6);   // a: [1, 2, 4, 6]
var l = a.push(5); // a: [1, 2, 4, 6, 5] l: 5

var a = [1, 2, 3];
a.pop(); // a: [1, 2]
// a.pop()的返回结果为 3

/* -----------------split------------------ */

var a = 20;
var b = a;
b = 30;

// 这时a的值是多少？


var m = { a: 10, b: 20 }
var n = m;
n.a = 15;

// 这时m.a的值是多少
