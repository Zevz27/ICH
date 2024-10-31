// // Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, в котором будет отображаться количество кликов.

// // Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов и изменяйте цвет фона блока. Если количество кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.

// // При достижении 10 кликов выведите сообщение под блоком с количеством кликов: "Поздравляем! Вы достигли 10 кликов!".

const btn = document.querySelector('.btn')
const box = document.querySelector('.box')
const div = document.createElement('div')

function getRandomRGB(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener("click",() =>{
    btn.value++
    if (btn.value  % 5 == 0) {
        box.style.background = getRandomRGB()

    }
    if(btn.value % 10 == 0){
        div.innerHTML = ''
        const p = document.createElement('p')
        box.insertAdjacentElement('afterend', div)
        p.innerText = `Поздравляем! Вы достигли ${btn.value}кликов!`
        div.append(p)
    }
} )

// Задание 1
// Создайте массив объектов с полями "название" и "год". Напишите функцию, используя метод sort, чтобы отсортировать объекты по году от самого старого к самому новому.

const movies = [
  { title: "Inception", year: 2010 },

  { title: "The Dark Knight", year: 2008 },

  { title: "Interstellar", year: 2014 },

  { title: "The Matrix", year: 1999 },
];
 function sorAge(arr) {
  const altMovie = arr.sort((a, b) => a.year - b.year);

  console.log(altMovie);
}
sorAge(movies);
// Задание 2
// Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод reduce, чтобы объединить все имена в одну строку через запятую.

const people = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 22 },
];

function summuArr(arr){
    const summuArr = arr.reduce((prevValue, currValue,index) => {
        return  prevValue +  currValue.name + (index < arr.length - 1 ? ',' : '')
    },'')
    return summuArr
    
}
console.log(summuArr(people));
