// Создайте объект, представляющий что то, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.
const coin = { 
    name: "Atom",
    age: 7,
   
    
}
console.log(coin.name + "" + coin.age);
console.log(`${coin.name}` + `${coin.age}`)

// Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.
const books = [
    {title: "Vojna i mir", author: "Lev Tolstoy"},
    {title: "Evangelie", author: "Apostol Mark"},
    {title: "Essentialismus", author: "Greg Mckeown"},
];
books.forEach(book => {
    console.log(book.title)
    console.log(book.author)
});
// Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.
const rectangle = { a: 10, b: 35}
rectangle.s = rectangle.a * rectangle.b;
rectangle.p = 2 *(rectangle.a + rectangle.b);
console.log(rectangle.s);
console.log(rectangle.p);

// Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.
const fruits = [
    {name: "Apple",    color: "Red" },
    {name: "Banan",    color: "Yellow"},
    {name: "Cherry",   color: "Red"},
    {name: "Lime",     color: "Yellow"},
    {name: "Strawbery",color: "Red"},
];
const redFruits = fruits.filter(fruit => fruit.color === "Red");
redFruits.forEach( fruit => {
    console.log(fruit.name)
});
// Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

