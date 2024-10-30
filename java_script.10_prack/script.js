// Задача 1: Создание кнопки с выводом сообщения
// Создайте кнопку с текстом "Click me". При клике на кнопку в консоль должно выводиться сообщение "Button clicked!".
const btn = document.createElement('button')
btn.innerText = 'Click me'
btn.addEventListener('click', function () {
  btn.innerText = 'Button clicked!'
})
document.body.append(btn)

// Задача 2: Создание списка с удалением элементов
// Создайте список из трёх элементов (li). Каждому элементу добавьте кнопку "Удалить". При клике на кнопку соответствующий элемент списка должен удаляться.

const list = document.createElement('ul')
for (let i = 0; i < 3; i++) {
  const li = document.createElement('li')
  const btn2 = document.createElement('button')
  btn2.innerText = 'Удалить'
  btn2.addEventListener('click', function () {
    li.remove()
  })
  li.append(btn2)
  // li.document.createElement("button")
  list.append(li)
}

document.body.append(list)

// Задача 3: Добавление новых элементов списка
// Создайте кнопку с текстом "Добавить элемент". При клике на кнопку в конец списка добавляется новый элемент списка с текстом "New Item".

const btn3 = document.createElement('button')
btn3.innerText = 'Добавить элемент'
btn3.addEventListener('click', function () {
  const li = document.createElement('li')
  li.innerText = 'New Item'
  // btn3.appendChild(p)
  list.append(li)
})

document.body.append(btn3)

// Задача 4: Переключение класса по клику
// Создайте блок <div> с текстом "Click to toggle". При клике на этот блок добавьте/удалите класс, который изменяет его цвет.

const div = document.createElement('div')

div.innerText = 'Click to toggle'
div.addEventListener('click', function () {})

document.body.append(div)
// Задача 5: Создание галереи изображений
// Создайте кнопку "Добавить изображение". При клике на кнопку добавляется новое изображение на страницу.

// Задача 6: Изменение текста элемента по клику
// Создайте несколько элементов списка (li). При клике на любой элемент его текст должен изменяться на "Clicked!".

// Задача 7: Увеличение счетчика кликов
// Создайте кнопку с текстом "Click me". При каждом клике на кнопку увеличивайте счетчик кликов и выводите его в параграф под кнопкой.

// Задача 8: Создание элемента с событием удаления
// Создайте кнопку с текстом "Добавить элемент". При клике на кнопку создается новый элемент списка, который содержит текст "New Item". Каждый новый элемент списка также должен содержать кнопку "Удалить", которая удаляет этот элемент при клике.

// Задача 9: Отображение скрытого текста по клику
// Создайте кнопку "Показать текст" и блок <p> с текстом, который изначально скрыт (с display: none). При клике на кнопку текст должен становиться видимым.

// Задача 10: Смена изображения по клику
// Создайте элемент изображения и кнопку "Сменить изображение". При клике на кнопку меняйте изображение на другое.


// Задача 6: Удаление элемента
// Создайте функцию removeElement, которая удаляет элемент с классом .to-remove со страницы.
function removeElement(){
 const removeEl = document.querySelectorAll('.to-remove')
 let i = removeEl.length -1;
 while (i >= 0){
  removeEl[i].remove()
 }
}
removeElement()
// Задача 7: Добавление нового заголовка
// Напишите функцию addNewHeader, которая создает элемент <h2> с текстом "New Header" и добавляет его в начало тела документа.

// Задача 8: Вставка элемента перед другим
// Создайте функцию insertBeforeItem, которая добавляет новый элемент списка <li> с текстом "Before First" перед первым элементом в списке <ul>.

// Задача 9: Изменение стиля элемента
// Напишите функцию changeStyle, которая находит элемент с классом .styled и изменяет его цвет текста на красный.

// Задача 10: Вложенный элемент
// Создайте функцию addNestedDiv, которая создает новый элемент <div>, внутри которого будет другой элемент <p> с текстом "Nested Paragraph", и добавляет этот <div> в тело документа.