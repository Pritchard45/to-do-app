function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++,
    });

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';


      newToDo.textContent = toDo.title;

      toDoList.appendChild(newToDo);
      newToDo.appendChild(checkbox);
      newToDo.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        toDos = deleteToDo(toDo.id);
        renderTheUI();
      });

    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';

  });

  function deleteToDo(id){
    toDos = toDos.filter(item => item.id !== id);
    return toDos;
  };

  renderTheUI();
}


window.onload = function() {
  onReady();
};
