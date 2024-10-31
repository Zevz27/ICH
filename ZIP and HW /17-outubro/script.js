const btn = document.querySelector("#btn");
const form = document.querySelector("#form");
const text = document.querySelector(".text");
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let userdata = e.target[0].value
//     const newEl = document.createElement('div')
//     newEl.innerText = userdata
//     document.body.insertAdjacentElement('beforeend', newEl)
//     e.target[0].value = ''
// })

// 1. element.addEventListener - вызываем слушатель события, он принимает 2 аргумента: событие(нап. click, onmouseover, onmouseend, keydown и тд) и слушатель (listener). Listener - это коллбек () => {}
// 2. e.target - внутренности вашего элемента, то, из каких свойств состоит этот объект (элемент), пример на 4 строке
// 3. При работе с формами мы должны сбрасывать дефолтное поведение элемента, например, e.preventDefault()
// 4. Существую методы добавления удаления элементов из дом дерева: append,insertAdjacentElementm, remove(), lastChild, appendChild, textContent, innerHTML, innerText, setAttribute('src', 'путь')
// 5.style

btn.addEventListener("click", () => {
  //если применяется много инлайн стилей за раз, лучше писать не в строку напрямую через style, а через setAttribute
//   text.setAttribute(
//     "style",
//     `
//         background: white;
//         padding: 10px;
//         border-radius: 8px;
//         border: 1px solid black;
//         display: none
//     `
//   );
    text.style.cssText =     `
    background: white;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid black;
`
  document.body.style.background = "red";
});
