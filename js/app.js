loadEvents();
// load every event in the page
function loadEvents() {
  document.querySelector('form').addEventListener('submit', submit);
}
// submit data function
function submit(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if (input.value != '')
    addTask(input.value);
  input.value = '';
}

// add tasks
function addTask(task) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

loadEvents();
// load every event in the page
function loadEvents() {
  document.querySelector('form').addEventListener('submit', submit);
  // recently added
  document.getElementById('clear').addEventListener('click', clearList);

}

function clearList(e) {
  // setting the ul innerHML to an empty string
  let ul = document.querySelector('ul').innerHTML = '';
}
loadEvents();
// load every event in the page
function loadEvents() {
  document.querySelector('form').addEventListener('submit', submit);
  document.getElementById('clear').addEventListener('click', clearList);
  // recently added
  document.querySelector('ul').addEventListener('click', deleteOrTick);

}
// deleteTick
function deleteOrTick(e) {
  if (e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// delete task
function deleteTask(e) {
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// tick a task
function tickTask(e) {
  const task = e.target.nextSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
    task.style.color = "#7f7575";
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}