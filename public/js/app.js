const addTask = document.querySelector('.add-btn');
const removeTask = document.querySelector('.delete-btn');

addTask.addEventListener('click', function(){
  const input = document.getElementById('task-input');
  const taskList = document.querySelector('ul');
  const task = document.createElement('li');
  
  task.textContent = input.value;
  input.value = '';
  taskList.append(task)
})

removeTask.addEventListener('click', function(){
  const removeItem = document.querySelector('li')

  removeItem.remove()
})