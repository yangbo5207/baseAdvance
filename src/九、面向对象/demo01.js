function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getName = function () {
  return this.name
}
Person.prototype.getAge = function () {
  return this.age;
}

function Student(name, age, grade) {
  // 构造函数继承
  Person.call(this, name, age);
  this.grade = grade;
}

// 原型继承
Student.prototype = Object.create(Person.prototype, {
  // 不要忘了重新指定构造函数
  constructor: {
    value: Student
  },
  getGrade: {
    value: function () {
      return this.grade
    }
  }
})


var s1 = new Student('ming', 22, 5);

console.log(s1.getName());  // ming
console.log(s1.getAge());   // 22
console.log(s1.getGrade()); // 5