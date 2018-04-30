function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";
     // set the title
    newLi.textContent = title;
     // attach the checkboxto the li
    newLi.appendChild(checkbox);
     // attach the li to the ul
    toDoList.appendChild(newLi);
     //empty the input
    newToDoText.value = '';
    
  });
}
window.onload = function() {
  onReady();
}
