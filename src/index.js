document.addEventListener("DOMContentLoaded", () => {
  let taskDescription = document.querySelector("form");
  taskDescription.addEventListener("submit", (e) => {
    e.preventDefault();
    createTodo(e.target.new_task_description.value);
    taskDescription.reset();
  });
});

function createTodo(todo){
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = " x ";
  let p = document.createElement('p');
  p.textContent = `${todo}  `;
  document.querySelector("#tasks").appendChild(p);
  p.appendChild(btn);
};

function handleDelete(e){
  e.target.parentNode.remove();
};