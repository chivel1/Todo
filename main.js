let container = document.getElementById("container")
let inputField = document.getElementById("inputField")
let addTodo = document.getElementById("addTodo")
let todoContainer = document.getElementById("todoContainer")

addTodo.addEventListener("click", ()=>{
    let todo = document.createElement("div")
    todo.classList.add("paragraph")
    todo.innerHTML = `<input type="checkbox" id="checkbox">
    <div class="todoText">${inputField.value}</div>
    <div class="todoButtons">
        <button id="edit"><i class="fa-solid fa-check"></i></button>
        <button id="delete" onclick="ConfirmDelete()"><i class="fa-solid fa-trash"></i>
        </button>
    </div>
    `

    todoContainer.appendChild(todo)
    let edit = todo.querySelector("#edit")
    edit.style.backgroundColor ="#6400e7"
    let deleteButton = todo.querySelector("#delete")
    deleteButton.style.backgroundColor = "red"
    deleteButton.addEventListener("click", ()=>{
        if (confirm("Are you sure you want to delete this todo item?")) {
          inputField.value = todo.querySelector(".todoText").innerText
          todoContainer.removeChild(todo)
        }
      })
       

    // edit.addEventListener("click", ()=>{
    //     if (edit.contenteditable="true"){
    //         edit.contenteditable="false"
    //         const button = document.createElement("button")
    //         console.log(button)
    //         button.textContent = "submit"
    //         button.value = todo.textContent;
    //         todo.replaceChild(button)
    //         // inputField.value = todo.textContent
    //         // return inputField.value

    //     }
    //     // inputField.innerText = edit.todo[1].innerText
    //     // console.log(inputField)
    //     // todoContainer.removeChild(todo)
    //     // console.log(todo.querySelector(".todoText").innerText)
    // })

})