const titleInput = document.querySelector('#title');
const descInput = document.querySelector('#desc');
const form = document.querySelector('form');
const todos = document.querySelector('#todos');
const counter = document.querySelector('#counter');

let todoCount = 0;

function updateCounter() {
    counter.innerText = 'Total Tasks: ' + todoCount;
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (title === '' || desc === '') {
        alert('Please fill in both title and description!');
        return;
    }

    todoCount++;
    updateCounter();

    const li = document.createElement('li');

    const newTitle = document.createElement('h3');
    newTitle.innerText = title;

    const newDesc = document.createElement('p');
    newDesc.innerText = desc;

    // done button - marks task complete
    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Done';
    doneBtn.style.backgroundColor = 'green';
    doneBtn.style.color = 'white';
    doneBtn.style.padding = '5px 10px';
    doneBtn.style.borderRadius = '6px';
    doneBtn.style.cursor = 'pointer';
    doneBtn.style.marginRight = '8px';

    doneBtn.addEventListener('click', () => {
        li.style.opacity = '0.5';
        newTitle.style.textDecoration = 'line-through';
        doneBtn.disabled = true;
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style.backgroundColor = 'crimson';
    deleteBtn.style.color = 'white';
    deleteBtn.style.padding = '5px 10px';
    deleteBtn.style.borderRadius = '6px';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', () => {
        li.remove();
        todoCount--;
        updateCounter();
    });

    li.append(newTitle);
    li.append(newDesc);
    li.append(doneBtn);
    li.append(deleteBtn);

    todos.append(li);

    titleInput.value = '';
    descInput.value = '';

});
