// let foo = { ...['a', 'b', 'c'] };
// console.log(foo);
// function* func(){
//  console.log("one");
//  yield '1';
//  console.log("two");
//  yield '2'; 
//  console.log("three");
//  return '3';
// }
// var f = func()
// console.log(f.next())
// console.log(f.next())
// const p1 = new Promise(function(resolve,reject){
//     resolve('success1');
//     resolve('success2');
// }); 
// const p2 = new Promise(function(resolve,reject){  
//     resolve('success3'); 
//     reject('reject');
// });
// p1.then(function(value){  
//     console.log(value); // success1
// });
// p2.then(function(value){ 
//     console.log(value); // success3
// });
// function* foo(x) {
//     var y = 2 * (yield (x + 1));
//     var z = yield (y / 3);
//     return (x + y + z);
//   }
  
//   var a = foo(5);
//   console.log(a.next()) // Object{value:6, done:false}
//   console.log(a.next()) // Object{value:NaN, done:false}
//   console.log(a.next()) // Object{value:NaN, done:true}
  
//   var b = foo(5);
//   b.next() // { value:6, done:false }
//   b.next(12) // { value:8, done:false }
//   b.next(13) // { value:42, done:true }
// function* f() {
//     for(var i = 0; true; i++) {
//       var reset = yield i;
//       if(reset) { i = -1; }
//     }
//   }
  
//   var g = f();
  
//   console.log(g.next()) // { value: 0, done: false }
//   console.log(g.next(true)) // { value: 1, done: false }
//   console.log(g.next()) // { value: 0, done: false }
// function* gen(x){
//     try {
//       var y = yield x + 2;
//     } catch (e){
//       console.log(e);
//     }
//     return y;
//   }
  
//   var g = gen(1);
//   console.log(g.next())
// function* gen(x) {
//     var y = yield x + 2;
//     var z = yield y + 3;
//     return z+y;
//   }
  
//   var g = gen(1);
//   console.log(g.next())  // { value: 3, done: false }
//   console.log(g.next(1))
//   console.log(g.next(5))
//   var map = new Map();
//   map.set(true, 1);
//   map.set('true', 2);
//   console.log(map.get(true))
//   console.log(map.get('true'))
// function timeout(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }

// asyncPrint('hello world', 50);

// function timeout() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'done');
//   });
// }

// timeout(100).then((value) => {
//   console.log(value);
// });

// Proxy(target,{
//   set: function(target,name,value,receiver) {
//     var success = Reflect.set(target, name, value, trceiver);
//     if(success) {
//       console.log('property' + name + 'on' +target +'set to '+ value);
//     }
//     return success;
//   }
// })

// var obj = new Proxy({}, {
//   get: function (target, propKey, receiver) {
//     console.log(`getting ${propKey}!`);
//     return Reflect.get(target, propKey, receiver);
//   },
//   set: function (target, propKey, value, receiver) {
//     console.log(`setting ${propKey}!`);
//     return Reflect.set(target, propKey, value, receiver);
//   }
// });
// console.log(obj.count = 1);
// console.log(++obj.count);

// var a = 1;
// var promise = new Promise(function(resolve,reject){
//   if(a === 1){
//     resolve('成功');
//   }else {
//     reject('失败');
//   }
// })
// promise.then(res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

let [x, y, ...z] = ['a'];
console.log(x)  // "a"
console.log(y) // undefined
console.log(z) // []