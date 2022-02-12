let todoInput = document.querySelector('#addTodoSection .addForm input');
let btnInput = document.querySelector('#addTodoSection .addForm button');
let todosList = document.querySelector('#todosSection .todosWrap .list');
let help = document.querySelector('.help');
let helpIcon = document.querySelector('.helpIcon');
let closeBtn = document.querySelector('.close');

btnInput.onclick = () => {
  if (todoInput.value !== "") {
    todoInput.style.border = '1px solid #333';
    let listItem = document.createElement('li');
    let listItemText = document.createTextNode(todoInput.value);

    // Start list item styling
    listItem.style.listStyle = 'none';
    listItem.style.padding = '15px';
    listItem.style.marginTop = '5px';
    listItem.style.maxWidth = '100%';
    listItem.style.fontFamily = 'sans-serif';
    listItem.style.fontWeight = 'bold';
    listItem.style.wordWrap = 'break-word';
    listItem.style.color = '#333';
    listItem.style.backgroundColor = '#f1f1f1';
    listItem.style.cursor = 'pointer';
    // End list item styling

    listItem.appendChild(listItemText);
    todosList.appendChild(listItem);
    todoInput.value = '';

    listItem.onclick = () => {
      listItem.style.opacity = '0.5';
      listItem.style.textDecoration = 'line-through';
    };

    listItem.ondblclick = () => {
      listItem.remove();
  };
  } else {
    todoInput.style.border = '1px solid #f00'
  }
};

helpIcon.onclick = () => {
  help.style.display = 'block';
}

closeBtn.onclick = () => {
  help.style.display = 'none';
}