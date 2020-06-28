/**
 * 1.Search new todos
 * 2.Delete existing todos
 * 3.Add new todos
 */

const search = document.querySelector('.search');
const add = document.querySelector('.add');
const todo = document.querySelector('.todo');

/**
 * 1.Search new todos
 */
search.addEventListener('keyup', e => {
    e.preventDefault();
    
    const searchInput = document.querySelector('#searchInput').value.trim();

    filterTodos(searchInput);
    
});

/**
 * Helper method for searching todos
 * @param {} find 
 */
const filterTodos = (find) => {
    const arrTodos = Array.from(todo.children);

    arrTodos
    .filter((todo) => !todo.textContent.toLowerCase().includes(find.toLowerCase()))
    .forEach((todo) => todo.classList.add('nomatch'));

    arrTodos
    .filter((todo) => todo.textContent.toLowerCase().includes(find.toLowerCase()))
    .forEach((todo) => todo.classList.remove('nomatch'));
}

/**
 * 2.Delete existing todos
 */
todo.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    if(e.target.tagName == 'I'){
        e.target.parentElement.remove();
    }
});

/**
 * 3.Add new todos
 */
add.addEventListener('submit', e => {
    e.preventDefault();

    const newTodo = document.querySelector('#addInput').value;
    let spanElement = document.createElement('span');
    spanElement.textContent = newTodo;

    let liElement = document.createElement('li');
    liElement.classList.add('list-group-item');

    let trashCan = document.createElement('i');
    trashCan.classList.add('delete', 'fas', 'fa-trash-alt', 'float-right');
    
    liElement.append(spanElement);
    liElement.append(trashCan);

    todo.append(liElement);
});