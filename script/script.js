const arr = ['string','hello',1,2,3,4]

const result = arr.filter(function(item){
    return typeof item === 'string'

})
console.log(result);

// console.log('hello world');
// const mass = ['hey','yuo',228]
// Проверьте, содержит ли массив хотя бы одно отрицательное число с помощью метода some().
let numbers = [1, 2, -3, 4, 5];
const findNum = numbers.some(item => item >4)
console.log(findNum);
const bigAls = numbers.find(item => item > 4)
console.log(bigAls);
const arr1= ['string1','hello','result',12,3,4]
const arr3 = ['string', 'hello', 'result4', 1, 2, 3, 4]
const arr2 = ['stirn', 'hehehe', 'jejej', 'icon', 'kkkkk']
const result1 = arr
.filter(item => typeof item === 'string' && item !== 'result')
.map(item => item.toUpperCase())
console.log(result1);
// //метод find возвращает первый искомый элемент. В отличае от метода filter что возвращает массив с элементами прошедшими проверку,
// //  find возвращает только одно искомое значение
const findEl = arr.find(item => item % 2 === 0)
const findEl2 = arr.find(item => item.length > 4)
const someValue = arr.some(item => item % 2 === 0)
const someValue2= arr.some(item => item === 'result')
const areAllElemsTrue = arr2.every(item => item.length > 4)
// console.log(someValue, someValue2);
// console.log(findEl, findEl2);
console.log(areAllElemsTrue);

// Проверьте, являются ли все элементы массива положительными числами с помощью метода every().
let numbers1 = [1, 2, 3, 4, 5];
const allPositive = numbers1.every(item => item > 0);


//Проверьте, являются ли все элементы массива четными числами с помощью метода every().
let numbers2 = [2, 4, 6, 8, 10];
const allEven = numbers2.every(item => item % 2 === 0);

// Проверьте, содержит ли массив хотя бы одну строку длиной более 10 символов с помощью метода some().
let strings = ["apple", "banana", "orange", "watermelon"];
const lang = strings.some(item => item.length > 10)
console.log(allEven,lang,allPositive); 

