let tasks = [];
const btnSave = document.querySelector("#Save");
const taskField = document.getElementById("task")
const taskList = document.getElementById("task_list")

let dados = JSON.parse(localStorage.getItem('taskList')) || []


taskList.innerHTML = dados


btnSave.addEventListener('click', function(){
  if(task.value){
      taskList.push(task.value)
       task.value = ""
       renderList()
   }
   salvarData()
 })


// btnSave.addEventListener("click", function(e) {
//   e.preventDefault();
  

//   let task = taskField.value

//   if (!task) return alert("Digite Alguma Coisa!")

//   tasks.push(task)
//   taskField.value = ""

//   renderList()
  
//   return
// })




var salvarData = function() {
  // var data = document.getElementById('task').value;
  // const dataObject = localStorage.setItem('dados', JSON.stringify(tasks));

  localStorage.setItem('taskList', JSON.stringify(tasks))
}
   
    // const itens = JSON.parse(localStorage.getItem("dados"))

    // console.log(itens)
 
document.onchange = salvarData;


function renderList() {
  taskList.innerHTML = '' 
  tasks.forEach((task, index) => {
    taskList.innerHTML += `<li class="task">
    ${task}
      <button onclick='remover(${index})'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
      </button>
    </li>`
   
    
  })
}


function remover(position) {
  tasks.splice(position, 1)
  renderList()
}
