// Создайте массив чисел и выведите значения массива в консоль. (Используйте цикл).
const numbers = [ 1,2,3,4,5,6,7];
for (let i = 1; i <= 7; i++){
    console.log(i)
}
// Создайте массив произвольных чисел(от 2 до 24) и выведите все числа, которые меньше 20, но больше 8. (Используйте цикл).
// const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]
const arr = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9]
for (let i = 0; i < arr.length; i++){
    if (arr[i] < 20 && arr[i] > 8 ) {
        console.log(arr[i])
    }
}
// Создайте массив чисел и найдите минимальное значение.
const arrOne = [2,3,1,5,6,7,8];
const min = Math.min(...arrOne)
console.log(min)
// Создайте массив чисел и обновите значение элемента по индексу.
const arrZwei = [ 1,4,56,45,23,10]
arrZwei[3] = 70;
console.log(arrZwei);
// * Создайте массив слов. Найдите самое длинное слово в массиве. (У строк, также как и у массивов, есть свойство length, которое измеряет длину строки).
const words = ['hello', 'filosofia', 'handy', 'chempion']
let longestWord = "";
for (let word of words){
    if(word.length > longestWord.length){
        longestWord = word;
    }
}
console.log(longestWord)