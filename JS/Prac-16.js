// selectors
var todoInput = document.querySelector(".todo-input");
var todoList = document.querySelector(".todo-list");
var todoButton = document.querySelector(".todo-button");


// Event handlers
todoButton.onclick = create;
todoList.onclick = checkdelete;


// Function
function create(e)
{
    e.preventDefault();
    if(todoInput.value)
    {
        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        var newLi = document.createElement("li");
        newLi.classList.add("todo-Item");
        newLi.innerHTML = todoInput.value;
        newDiv.appendChild(newLi);

        var checkButton = document.createElement("button");
        checkButton.classList.add("check-btn");
        checkButton.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(checkButton);

        var deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deleteButton);

        todoList.appendChild(newDiv);
    }
    else
    {
        alert("Enter any list item.")
    }
}

function checkdelete (e){
    var item = e.target;
    if(item.classList[0] === "delete-btn")
    {
       var parent =  item.parentNode;
       parent.remove();
    }
    if(item.classList[0] === "check-btn")
    {
       var parent =  item.parentNode;
       parent.classList.toggle("completed");
    }
}