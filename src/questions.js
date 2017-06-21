const QuestionList = [
  {
    title :
`Which of the following option contains all the statements returning true?

1) 1 == '1'
2) 1 === '1'
3) undefined === void 0` ,
    answer : 0 ,
    options : [
      '1,3',
      '1,2',
      '2,3',
      '1'
    ]
  },
  {
    title :
`How many 'bar' will be outputted to console?

var myObject = {
foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();`,
    answer : 2 ,
    options : [
      1,
      2,
      3,
      4
    ]
  },
  {
    title :
`What will the code below output to the console?

var a = 1;

function fn() {
  var a = 2;
  a = a+1;
}
fn();
console.log(a);` ,
    answer : 0 ,
    options : [
      1,
      3,
      2,
      'undefined'
    ]
  },
  {
    title :
`Choose the correct output for following code
var a = 1;

function fn(a) {
  a = a+1;
}
fn(a);
console.log(a);` ,
    answer : 0 ,
    options : [
      1,
      2,
      'a',
      'undefined'
    ]
  },
  {
    title :
`What will the code below output to the console?
var fn = function(){
  console.log(123);
}

var fn2 = fn;

fn = function(){
  console.log(321);
}

fn2();` ,
    answer : 0 ,
    options : [
      123,
      321,
      'undefined',
      'runtime error'
    ]
  },
  {
    title :
`What will the code below output to the console?
var fn = function(){
  console.log(123);
}

var fn2 = function() {
  fn();
}

fn = function(){
  console.log(321);
}

fn2();` ,
    answer : 1 ,
    options : [
      123,
      321,
      'undefined',
      'runtime error'
    ]
  },
  {
    title :
`Choose the correct output for following code
console.log(1)
setTimeout(function () {
  console.log(2);
}, 0)

console.log(3);` ,
    answer : 1 ,
    options : [
      '1,2,3',
      '1,3,2',
      '1,3',
      '1,3,undefined,2'
    ]
  },
  {
    title : 'Which of the following will return 6?',
    answer : 2 ,
    options : [
      '[1,2,3].map(function(x, y) { return x + y; })',
      '[1,2,3].forEach(function(x, y) { return x + y})',
      '[1,2,3].reduce(function(x, y) { return x + y})',
      '[1,2,3].join("+")'
    ]
  },
  {
    title :
`What will the code below output to the console?
var i =0
for (var i = 0; i < 5; i++) {
}
console.log(i);` ,
    answer : 1 ,
    options : [
      4,
      5,
      0,
      'undefined'
    ],
    isNeed : true
  },
  {
    title :
`Given code below, which option will equal to 2?
var obj = {a: 2, b: 1, c: 1};
var key = 'a';` ,
    answer : 3 ,
    options : [
      'obj.2',
      'obj[2]',
      'obj.key',
      'obj[key]'
    ],
    isNeed : true
  },
  {
    title :
`Which will output 'Hi, I am Neil' in console?
var obj = { name: 'Neil' }
function sayHi(name) {
    console.log('Hi, I am ' + this.name);
}` ,
    answer : 2 ,
    options : [
      'sayHi.apply(null, obj)',
      'sayHi()',
      'sayHi.apply(obj, obj)',
      'sayHi.apply(obj.name)'
    ]
  },
  {
    title :
`What will the code below output to the console?

var foo = function(){
  var fns = arguments ;
  return function(result){
    for ( var i = fns.length - 1 ; i >= 0 ; i -- ){
      result = fns[i].call(this,result) ;
    }
    return result ;
  }
}

var a = function(x){
  return x + 1 ;
}
var b = function(x){
  return x * 2 ;
}
var c = foo(a,b);
console.log(c(1));` ,
    answer : 2 ,
    options : [
      1,
      2,
      3,
      4
    ]
  },
  {
    title :
`What will the code below output to the console?

var arr = [ 1, 2, 3 ];
function mul(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
}
mul(arr);
console.log(arr);` ,
    answer : 2 ,
    options : [
      '[ 1, 2, 3 ]',
      '[ 4, 5, 6 ]',
      '[ 2, 4, 6 ]',
      'undefined'
    ]
  },
  {
    title :
`var a;
(function(){
  var a = b = 3;
})();

console.log(a + ',' + b);` ,
    answer : 1 ,
    options : [
      '3,3',
      'undefined,3',
      '3,undefined',
      'undefined,undefined'
    ]
  },
  {
    title :
`What will the code below output to the console?

var foo = function(fn,time){
  var isActived = false ;
  return function(){
    if ( !isActived ){
      isActived = true ;
      fn.apply(this,arguments);
      setTimeout(function(){
        isActived = false ;
      },time)
    }
  }
}

var a = function(x){
  console.log(x) ;
}

var b = foo(a,500);
b(1);
b(2);
setTimeout(function(){
  b(3);
},700);
setTimeout(function(){
  b(4);
},800);` ,
    answer : 2 ,
    options : [
      '1,2,3,4',
      '1,2',
      '1,3',
      '1,3,4'
    ]
  },
  {
    title :
`What will the code below output to the console?

var arr = [ 1, 2, 3 ];
function mul(arr) {
  return arr.map(function(num) {
    return num * 2;
  });
}
mul(arr);
console.log(arr);` ,
    answer : 0 ,
    options : [
      '[ 1, 2, 3 ]',
      '[ 4, 5, 6 ]',
      '[ 2, 4, 6 ]',
      'undefined'
    ]
  },
  {
    title :
`What is the reason for wrapping the entire content of a JavaScript source file in a function block?` ,
    answer : 0 ,
    options : [
      'variable scope',
      'syntax',
      'convention',
      'prevent runtime error'
    ]
  },
  {
    title :
`What will the code below output to the console?

function foo()
{
  return
  {
      bar: "hello"
  };
}
console.log(foo().bar);` ,
    answer : 3 ,
    options : [
      'hello',
      'bar',
      'undefined',
      'runtime error'
    ]
  },
  {
    title :
`What will the code below output to the console?
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log( arr1.length, arr2.length);` ,
    answer : 3 ,
    options : [
      '4 5',
      '4 9',
      '5 9',
      '5 5'
    ]
  },
  {
    title :
`What would the following lines of code output to the console?

console.log(0 || 1);
console.log(1 || 2);
console.log(0 && 1);
console.log(1 && 2);` ,
    answer : 0 ,
    options : [
      '1102',
      '1212',
      '1201',
      '1202'
    ]
  },
  {
    title :
`What will the code below output to the console?

var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);` ,
    answer : 1 ,
    options : [
      123,
      456,
      `{key:'b'}`,
      '[object Object]'
    ]
  }
]

export default QuestionList ;