// Digitar uma task
// Salvar no local storage ao clicar em salvar
// atualizar lista

const LOCALSTORAGENAME = 'my_tasks'
const btnSave = document.getElementById("btnSave");
const txtTask = document.getElementById("txtTask")
const lstTask = document.getElementById('task_list')

const tasks = JSON.parse(localStorage.getItem(LOCALSTORAGENAME)) || []


btnSave.addEventListener('click', function(e) {
    e.preventDefault();

    if (!txtTask.value) return alert("Digite Alguma Coisa!")

    saveTask(txtTask.value)
    txtTask.value = ''

    return
})

const saveTask = (newTask) => {

    if(!tasks) tasks = []

    if (tasks.includes(newTask)) {
        return alert("Valor ja existe")
    }

    tasks.push(newTask)
    localStorage.setItem(LOCALSTORAGENAME, JSON.stringify(tasks))

    renderList()

    return
}

const renderList = () => {
    let count = 0
    lstTask.innerHTML = ''
    tasks.forEach((element, index) => {
        lstTask.innerHTML += `<li class="li l1"  id="notanotas"><p>${element}
        </p><button  id="apagar"  onclick="removeTask(${index}) ">
        <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        </button></li>`
    })

    // for(let i = 0; i < tasks.length; i++) {
    //         lstTask.innerHTML += `<li class="li l1"  id="nota notas"><p>${tasks[i]}</p><button id="apagar"  onclick="removeTask(${i})">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    //           <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    //         </svg>
    //         </button></li>`
    // }

    // while(count < tasks.length) {
    //     lstTask.innerHTML += `<li class="li l1"  id="nota notas"><p>${tasks[count]}</p><button id="apagar"  onclick="removeTask(${count})">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
    //           <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
    //         </svg>
    //         </button></li>`
        
    //     count++
    // }

    const notas = [8, 9, 10, 10, 4, 8]
    const result = notas.map((value) => {
        return value * 2
    })

    const objectArray = [
        { name: 'jandir'},
        { name: 'alceu'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        { name: 'manuel'},
        [2, 4, 5, 6, 6],
        [2, 4, 5, 6, 6],
        [2, 4, 5, 6, 6],
        [2, 4, 5, 6, 6],
        [2, 4, 5, 6, 6],
        [2, 4, 5, 6, 6],
        'jandir',
        true,
        false
    ]

    console.log(result)
    console.log(`O meu array tem ${objectArray.length} elementos`)
}

const removeTask = (index) => {
    tasks.splice(index, 1)
    localStorage.setItem(LOCALSTORAGENAME, JSON.stringify(tasks))

    renderList()
}

renderList()