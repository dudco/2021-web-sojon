// var 중복 선언 가능
// var name = "dudco";
// console.log(name);
// var name = "dudco2";
// console.log(name);

// let 중복 선언 불가능
// let name = "dudco";
// console.log(name);
// let name = "dudco2";
// console.log(name);

// let : mutable
// let mutName = "dudco"
// console.log(mutName);
// mutName = "dudco2";
// console.log(mutName);

// const: immutable
// const name = "dudco";
// console.log(name);
// name = "dudco2";
// console.log(name);

// 이상한 js
// console.log(`0 == "0": ${0 === "0"}`);
// console.log(`0 == []: ${0 === []}`);
// console.log(`"0" == []: ${ "0" === []}`);

// 스코프1
// const x = 3;

// function f() {
//   console.log(x);
//   console.log(y);
// }
// {
//   const y = 5;
//   f();
// }

// 스코프2
// {
//   // 외부 블록
//   let x = {color: 'blue'};
//   let y = x;
//   let z = 3;
//   {
//       // 내부 블록
//       let x = 5; // 바깥 x 가려짐
//       console.log(x); // 5
//       console.log(y.color) // 'blue'
//       y.color = 'red';
//       console.log(z) // 3
//   }
//   console.log(x.color); // 'red'
//   console.log(y.color); // 'red'
//   console.log(z) // 3
// }

// 함수
// function add(a, b) {
//   return a + b;
// }
// const sub = function(a, b) {
//   return a - b;
// }
// const multi = (a, b) => {
//   return a * b;
// }
// (function (a, v) {
//   // IIFE 바디
//   console.log("Immediately Invoked Function Expression");
// })();

// 클로저
// let globalFunc; // 정의되지 않은 전역 함수
// {
//   let blockVar = "a"; // 블록 스코프에 있는 변수
//   globalFunc = function () { // 함수가 특정 스코프에 접근할 수 있도록 정의
//     console.log(blockVar);
//   };
// }
// globalFunc(); // 'a';

// 객체
// const sam1 = {
// 	name: 'Sam',
//   age: 4,
// };

// const sam2 = { name: 'Sam', age: 4 }; // 한 줄 선언방식

// const sam3 = {
// 	name: 'Sam',
//   familly: {			// 프로퍼티 값도 객체가 될 수 있다.
//     mom: 'July',
//     dad: 'Jon',
//     dog: 'Page'
//   }
// }

// console.log(sam3.familly.mom);
// console.log(sam3.familly["mom"]);

// 비구조화 할당
// const object = { a: 1, b: 2 };
// const { a: a2 = 3, b = 3 } = object;
// const array = [1];
// const [one, two = 2] = array;
// console.log(two)

// 객체 함수
// const dog = {
// 	name : "멍멍이",
// 	sound : "멍멍",
// 	say() {
// 		console.log(this.sound); //여기서 this가 가리키는 건 함수가 위치한 이 객체 자기자신을 의미. 즉 dog!
//   },
//   say2: () => {
//     console.log(this);
//   }
// };

// dog.say();
// dog.say2();

// dog.say(); //"멍멍"

// 객체 getter, setter
// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };

// console.log(user.fullName);
// user.fullName = "윤 영채"
// console.log(user.fullName);

// 반복문
// const arr = [0, 3, 2, 1, 4, 5, 6, "done"];
// for (const value of arr) {
//   console.log(value);
// }

// const obj = {a: "1", b: "2", c: "3"};
// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// 배열 내장 함수
// shift / pop / unshift / push
// const arr = [1, 2, 3]

// arr.push(4);  // arr = [1, 2, 3, 4]
// arr.pop(); 	  // 4  arr = [1, 2, 3]
// arr.unshift(0) //	arr = [0, 1, 2, 3]
// arr.shift()   // 0  arr = [1, 2, 3]

// concat
// const arr = [1, 2, 3];

// const arr2 = arr.concat(4, 5, 6);	// [1, 2, 3, 4, 5, 6] arr은 바뀌지 않음.
// arr.concat([4, 5, 6]);	// [1, 2, 3, 4, 5, 6]
// arr.concat([4, 5], 6);	// [1, 2, 3, 4, 5, 6]
// arr.concat([4, [5, 6]]);	// [1, 2, 3, 4, [5, 6]]
// console.log(arr, arr2);

// slice 배열 일부 가져오기
// const arr = [1, 2, 3, 4, 5];

// arr.slice(3);		// [4, 5] arr은 바뀌지 않음.
// arr.slice(2, 4);	// [3, 4]
// arr.slice(-2);		// [4, 5]

// splice 임의의 위치에 요소 추가 또는 제거하기
// const arr = [1, 5, 7];

// arr.splice(1, 0, 2, 3, 4);	// arr = [1, 2, 3, 4, 5, 7] 제거없음.
// arr.splice(5, 0, 6);		// arr = [1, 2, 3, 4, 5, 6, 7] 제거없음.
// arr.splice(1, 2);			// arr = [1, 4, 5, 6, 7] 제거 [2, 3]

// join 배열 합치기
// const array = [1, 2, 3, 4, 5];

// console.log(array.join()); //"1,2,3,4,5"
// console.log(array.join(' '));//"1 2 3 4 5"
// console.log(array.join(', ')); //"1, 2, 3, 4, 5"

// indexOf
// const arr = ['Tom', 'Jerry', 'Ted', 'Ryan'];
// console.log(arr.indexOf('Ted'));

// findIndex
// const arr = [
//   {name: 'Tom', age: 20},
//   {name: 'Jerry', age: 22},
//   {name: 'Ted', age: 24},
//   {name: 'Ryan', age: 24},
// ]
// const func1 = data => data.name === 'Ted';
// console.log(arr.findIndex(func1));

// 객체 생성자
// function Animal(type, name, sound) {
// 	this.type = type;
// 	this.name = name;
//   this.sound = sound;
// }

// Animal.prototype.say = function() { //prototype 설정!
// 	console.log(this.sound);
// }

// const dog = new Animal("개", "멍멍이", "멍멍");
// const cat = new Animal("고양이", "냥이", "냐옹");

// console.log(dog.say === cat.say)

// 객체 생성자 상속
// function Dog(name, sound) {
// 	Animal.call(this, '개', name, sound); //여기서 this는 Dog 객체 생성자에서의 this
// 	//그리고 this 다음 파라미터들은 Animal 객체 생성자에 넣어야 하는 값들
// }

// function Cat(name, sound) {
// 	Animal.call(this, '고양이', name, sound);
// }

// Dog.prototype = Animal.prototype; //Dog의 prototype에 Animal의 prototype 설정
// Cat.prototype = Animal.prototype;

// class
// class Animal {
//   constructor(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
//   }

//   say() {
//     console.log(this.sound);
//   }
// }

// const dog = new Animal("개", "멍멍이", "멍멍");
// const cat = new Animal("고양이", "냥이", "냐옹");

// class Dog extends Animal {
//   constructor(name, sound) {
//     super("개", name, sound);
//   }
// }

// class Cat extends Animal {
//   constructor(name, sound) {
//     super("고양이", name, sound);
//   }
// }
