const addButton = document.querySelector('button');
const toDoContainer = document.querySelector('.to-do-container');

addButton.addEventListener('click', addButtonClick);

function addButtonClick(){
    let item = document.createElement('div');
    item.classList.add('card')
    let itemText = document.createTextNode('prueba')
    item.appendChild(itemText)
    toDoContainer.appendChild(item);
}