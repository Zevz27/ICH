const form = document.querySelector('.form')
form.addEventListener('submit', e => {
  e.preventDefault()
  const task = e.target['task'].value
  const description = e.target['description'].value
  localStorage.setItem('task', JSON.stringify({ task, description }))
  console.log(task, description)
})