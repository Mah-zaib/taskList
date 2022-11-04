    
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  //add remove task
  taskList.addEventListener('click',RemoveTask);
  //add clear task 
  clearBtn.addEventListener('click',clearTasks )
}

// add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // create li element
  const li =document.createElement('li');
  // add class
  li.className ='collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link =document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

   //console.log(li);

  // append li to ul
  taskList.appendChild(li);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}

//remove task

function RemoveTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }

 }


 //clear task 
  function clearTasks(){
    taskList.innerHTML = '';
  }