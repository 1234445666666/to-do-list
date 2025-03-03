import '../styles/style.css';
//реализация добавление задач 
const btnAdd = document.querySelector('.main__add');
const input = document.querySelector('.main__input');
const btnRemove = document.querySelector('.main__removeAll');
const taskList = document.querySelector('.main__list');

btnAdd.addEventListener('click' , () => {
  if (input.value.trim() !== '') {
    createTask(input.value);
    input.value = '';
  }
  else {
    alert('Введите задачу')
  }
});

const createTask = (text) => {
  const todoItem = document.createElement("li");
  todoItem.className = "to__do__list__item";

  todoItem.insertAdjacentHTML (
    "beforeend",
    `
      <span class="icon icon__done"></span>
      <span>${text}</span>
      <span class="icon icon__delete"></span>
    `
  );

  taskList.appendChild(todoItem);
  taskDone(todoItem);
  taskDelte(todoItem);
};

const taskDone = (task) => {
  let doneBtn = task.querySelector('.icon__done');
  doneBtn.addEventListener('click', () => {
    task.classList.add('done');
  })
};

const taskDelte = (task) => {
  let deleteBtn = task.querySelector('.icon__delete');
  deleteBtn.addEventListener('click', () => {
    task.remove();
  })
};





