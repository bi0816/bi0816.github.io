const todoArea = document.querySelector('.todo-area');
const todoForm = todoArea.querySelector('.form');
const todoInput = todoArea.querySelector('.input');
const listTodo = todoArea.querySelector('.list-todo');

const TODO_KEY = 'todo';
let num = 0;
let toDoArray = [];

function getList() {
  const value = localStorage.getItem(TODO_KEY);
   if (value !== null) {
    toDoArray = JSON.parse(value);
    toDoArray.forEach(item => createElement(item));
   }
}

function saveList() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray));
}

function handleSubmit(e) {
  e.preventDefault();
  const value = todoInput.value;
  todoInput.value = '';
  const newListItem = {
    text: value,
    index: num
  }
  toDoArray.push(newListItem);
  createElement(newListItem);
  saveList();
}

function createElement(newListItem) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.addEventListener('click', deleteElement);
  span.innerText = newListItem.text;
  li.setAttribute('data-index', newListItem.index);
  li.append(span);
  li.append(deleteBtn);
  listTodo.append(li);
  num++;
}

function deleteElement(e) {
  const target = e.target.parentElement;
  let option = parseInt(target.dataset.index);
  target.remove();
  toDoArray = toDoArray.filter(item => option !== item.index);
  saveList();
}

getList();
todoForm.addEventListener('submit', handleSubmit);
