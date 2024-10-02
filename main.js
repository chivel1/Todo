let container = document.getElementById("container")
let inputField = document.getElementById("inputField")
let addTodo = document.getElementById("addTodo")
let all = document.getElementById("all")
let pending = document.getElementById("pending")
let completed = document.getElementById("completed")
let todos = []
let todoContainer = document.getElementById('todoContainer');

all.addEventListener("click", getAll)
function getAll(){
    let renderTod = renderTodos(filter = "all");
    console.log("object", renderTod)
    return renderTod

}
pending.addEventListener("click", ()=>{
    let  Ptodos = renderTodos("pending");
    console.log("pending" + Ptodos)
    return  Ptodos;
})
completed.addEventListener("click", ()=>{
    return renderTodos('completed')
})
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('addTodo').click();
    }
});

addTodo.addEventListener("click", ()=>{
    if (inputField.value){
        const todoString  = {
            text: inputField.value,
            completed: false
        };
        todos.push(todoString)
        renderTodos();      
    }else{
        alert('Please enter a todo item')
    }
    inputField.value = ""
})

function renderTodos(filter ='all'){
    todoContainer.innerHTML = '';
    todos.forEach((todo, index) => {
        if(filter === 'completed' && !todo.completed) return;
        if(filter === 'pending' && todo.completed) return;
        let todoElement = document.createElement("div")
        todoElement.classList.add("paragraph")
        todo.completed ? todoElement.innerHTML = `<input type="checkbox" id="checkbox" checked>
        <div class="todoText">${todo.text}</div>
        <div class="todoButtons">
            <button id="edit"><i class="fa-regular fa-pen-to-square"></i></button>
            <button id="delete" onclick="ConfirmDelete()"><i class="fa-solid fa-trash" ></i>
            </button>
        </div>` : todoElement.innerHTML = `<input type="checkbox" id="checkbox">
        <div class="todoText">${todo.text}</div>
        <div class="todoButtons">
            <button id="edit"><i class="fa-solid fa-check"></i></button>
            <button id="delete" onclick="ConfirmDelete()"><i class="fa-solid fa-trash" ></i>
            </button>
        </div>`
        todo.completed ? todoElement.classList.add("strikethrough") : todoElement.classList.remove("strikethrough")

        
        
        
        todoContainer.appendChild(todoElement)        
        let editButton = todoElement.querySelector("#edit")
        editButton.style.backgroundColor ="#6400e7"
        let deleteButton = todoElement.querySelector("#delete")
        deleteButton.style.backgroundColor = "red";
        deleteButton.addEventListener("click", ()=>{
            if (confirm("Are you sure you want to delete this todo item?")) {
              todos.splice(index, 1)
              renderTodos()
            }
          })
          editButton.addEventListener("click", ()=>{
            let todoText = todoElement.querySelector(".todoText")
            let isEditing = todoText.contentEditable === 'true';
            if (isEditing) {
                todoText.contentEditable = 'false'
                editButton.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`
                
            }else{
                todoText.contentEditable = 'true'
                todoText.focus()
                editButton.innerHTML =`<i class="fa-solid fa-check"></i>`
            }
        })
        const checkbox = todoElement.querySelector("#checkbox")
        checkbox.addEventListener("click", ()=>{
            
            // let todoText = todoElement.querySelector(".todoText")
            if (checkbox.checked){

                todoElement.classList.add("strikethrough")
                editButton.disabled = true;
                editButton.style.backgroundColor = "#E9EFEC"; 
                editButton.style.color = "grey"; 
                editButton.querySelector("i").classList.remove("fa-regular");
                editButton.querySelector("i").classList.add("fa-solid"); 
                editButton.querySelector("i").classList.add("fa-lock"); 
            } 
            else{
                todoElement.classList.remove("strikethrough")
                editButton.disabled = false;
                editButton.style.backgroundColor = "#6400e7";
                editButton.style.color = "white"; 
                editButton.querySelector("i").classList.remove("fa-solid");
                editButton.querySelector("i").classList.remove("fa-lock");
                editButton.querySelector("i").classList.add("fa-regular");
                editButton.querySelector("i").classList.add("fa-pen-to-square"); 
            }
            todo.completed = checkbox.checked
        })
    })
}



function toggleCompleteTodo(index){
    todos[index].completed = !todos[index].completed;
    renderTodos();
}
let filterButton = document.getElementById("filterButtom");
let btns = filterButton.children;
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("activeBtn");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" activeBtn", "");
        }
        this.className += " activeBtn";
    });
}