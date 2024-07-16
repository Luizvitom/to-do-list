const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listComplete = document.querySelector(".list-tasks");

let myList = [];

function addNewTask() {

  if(input.value == ""){
    alert("digite algo valido");
    
  }
  else if(input.value != ""){
    myList.push({
        task: input.value,
        complete: false,
      });
    input.value = null;
  
  showTasks();
  }
}

function showTasks() {
  let newLi = "";

  myList.forEach((item, index) => {
    newLi =
      newLi +
      `   
        <li class="task ${item.complete && "done"}">
                <img src="Images/check.svg" alt="" onclick="completeTask(${index})">
                <p>${item.task}</p>
                <img src="Images/lixeira.png" alt="" onclick="deleteTask(${index})">
            </li>
        `;
  });

  listComplete.innerHTML = newLi;

  localStorage.setItem("list", JSON.stringify(myList));
}

function completeTask(index) {
  myList[index].complete = !myList[index].complete;

  showTasks();
}

function deleteTask(index) {
  myList.splice(index, 1);

  showTasks();
}

function rechargeTasks() {
  const tasksLocalStorage = localStorage.getItem("list");

  if (tasksLocalStorage) {
    myList = JSON.parse(tasksLocalStorage);
  }
  showTasks();
}

rechargeTasks();

button.addEventListener("click", addNewTask);