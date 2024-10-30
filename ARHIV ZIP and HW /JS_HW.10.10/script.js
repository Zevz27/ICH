// // Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.
// function sum(a,b =8){
//     return a + b;
// }
// console.log(sum(4,5));
// console.log(sum(2,3));

// // Создайте массив numbers с несколькими числами.
// // Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.
// const numbers = [10,29,15,11]
// function calculateSum (massiv){
//     let sum = 0;
//     for (let i = 0; i < massiv.length; i++) {
//        sum += massiv[i]

//     }
//     return sum
// }
// console.log(calculateSum(numbers));

// // Создайте массив students с объектами студентов (имя, возраст, курс).
// // Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.

// const studens = [
//   { name: "Muhhamad", age: 25, kurs: "Web" },
//   { name: "Kreal", age: 28, kurs: "Web" },
//   { name: "Serjio", age: 31, kurs: "Web" },
// ];
// function displayStudentInfo(studen) {
//   return `name: ${studen.name} age: ${studen.age} kurs: ${studen.web}`;
// }
// console.log(displayStudentInfo(studens[0]));
// console.log(displayStudentInfo(studens[1]));
// console.log(displayStudentInfo(studens[2]));

// const numer = [1,34,31,12,234,56,6,7,8,11]

// const username = 'juss world'
// if(username.length > 15){
//     checkUsername(username)
// }else{
//    console.log(checkUsername('username lenth less than 15 letter'));

// }

// function checkUsername(username){
//     return username.split('').reverse().join('')
// }
// console.log(checkUsername('hello, world'));

// const ichBin = {
//   myName: "Serjio",
//   age: 31,
//   land: "Germany",
//   city: "Düsseldorf",
//   car: {
//     brand: "Daewhoo",
//     model: "Nexia",
//     year: 2003,
//     maxSpeed: 180,
//     passport: {
//       engineId: "2385023RPT",
//       timesInService: 122,
//       kennenzeichen: "m532m90",
//       previouseOwners: [
//         {
//           id: 1,
//           name: "Leanne Graham",
//           username: "Bret",
//           email: "Sincere@april.biz",
//           address: {
//             street: "Kulas Light",
//             suite: "Apt. 556",
//             city: "Gwenborough",
//             zipcode: "92998-3874",
//             geo: {
//               lat: "-37.3159",
//               lng: "81.1496",
//             },
//           },
//           phone: "1-770-736-8031 x56442",
//           website: "hildegard.org",
//           company: {
//             name: "Romaguera-Crona",
//             catchPhrase: "Multi-layered client-server neural-net",
//             bs: "harness real-time e-markets",
//           },
//           habits: ['smoke', 'listen radio', 'drink alcohol', 'didnt clean the car']
//         },
//         {
//             id: 1,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//             address: {
//               street: "Kulas Light",
//               suite: "Apt. 556",
//               city: "Gwenborough",
//               zipcode: "92998-3874",
//               geo: {
//                 lat: "-37.3159",
//                 lng: "81.1496",
//               },
//             },
//             phone: "1-770-736-8031 x56442",
//             website: "hildegard.org",
//             company: {
//               name: "Romaguera-Crona",
//               catchPhrase: "Multi-layered client-server neural-net",
//               bs: "harness real-time e-markets",
//             },
//             habits: [ 'listen radio', 'did services', 'cleaned car']
//           },
//           {
//             id: 1,
//             name: "Leanne Graham",
//             username: "Bret",
//             email: "Sincere@april.biz",
//             address: {
//               street: "Kulas Light",
//               suite: "Apt. 556",
//               city: "Gwenborough",
//               zipcode: "92998-3874",
//               geo: {
//                 lat: "-37.3159",
//                 lng: "81.1496",
//               },
//             },
//             phone: "1-770-736-8031 x56442",
//             website: "hildegard.org",
//             company: {
//               name: "Romaguera-Crona",
//               catchPhrase: "Multi-layered client-server neural-net",
//               bs: "harness real-time e-markets",
//             },
//             habits: ['sing', 'listen radio', 'didnt clean the car']
//           }
//       ],
//     },
//   },
// };

// const previouseOwners = ichBin.car.passport.previouseOwners
// console.log(previouseOwners);
// for ( const item of previouseOwners){
//   console.log(item);
//   const habits =item.habits
//   console.log(habits);
//   for (const habit of habits){
//     console.log(previouseOwner(habit,item,));

//   }
//   function previouseOwner(habits, name) {
//     return `Habits of ${name}: ${habits}`;

//   }
// }

// const username = 'yury1997'

// if(username.length > 15) {
//     console.log(checkUsername(username));
// } else {
//     console.log(checkUsername('username lenth less than 15 letter'));
// }

// function checkUsername(username) {
//     return username.split('').reverse().join('')
// }

// Отличие объекта от массива
// 1. Структура данных
// 2. Массив индексируется от 0 до бесконечности в зависимости от кол -ва элементов в нем
// 3. Массив - логическое перечисление данных принадлежащих к конкретной тематике (например, перечисляем типы банковского платежа, черты характера человека, увлечения, любимые блюда и тд), а объект - структура данных, четко описывающая объект по характеристикам в формате ключ: значение, где ключ - название описываемой хар - ки, а так же любые данные описываающие этот самый объект
// 4. Объект - тип данных, массив - специальный объект (иногда говорят, что массив - спец. тип данных)

// function EvenNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     if (n % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// EvenNumbers(20);

//     Напиши программу, которая принимает массив и число, и выводит количество элементов массива, которые больше этого числа.
// Пример:
// Ввод: массив [1, 5, 8, 3, 7, 10] и число 5
// Вывод: Количество элементов больше 5: 3 (это числа 8, 7, и 10)

// function countGradeNumber (n, arr){
//   let count = 0
//     for ( let i = 0; i <= arr.length; i++){
//       if (array[i] > n){
//         count++
//       }

//     }
//     return count
// }
// const array =[1, 5, 8, 3, 7, 10];

// const result = countGradeNumber(5,array)
// console.log(`количество элементов больше ${n}: ${result}`);
// Напиши программу, которая выводит сумму всех чисел от 1 до N, которые делятся на 3 без остатка.
// Пример:
// Ввод: N = 10
// // Вывод: Сумма чисел, кратных 3: 18 (3 + 6 + 9)

function sumNum(n){
  let count = 0;
  let exactNum = [];
  for (let i = 0; i < n; i++){
    if (i % 3 === 0){
      count = count +1
      exactNum.push(i)
    }
}
  console.log(`${count}, ${exactNum}`);
  
}
sumNum(20)

const arr = [1,2,3,4,5]
arr.push()
console.log(arr);

function more3(n) {
  let str = ''
  for( let i = n; i >= 1; i--){
    str += i + (i > 1 ?  ', ': '')
    // if(i > 1) {
    //   str += ', '
    // }
  }
  console.log(str);
  
}
more3(5)
