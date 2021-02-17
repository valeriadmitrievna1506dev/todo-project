const addForm = document.getElementById('addTaskForm');
const tasksPlace = document.getElementById('tasksContent');

const deleteTaskButton =
  '<button class="deleteTask"><svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 24 24" style="enable-background: new 0 0 512 512" xml:space="preserve" class=""> <g> <path xmlns="http://www.w3.org/2000/svg" d="m21.25 4h-12.88c-.761 0-1.494.319-2.012.876l-6.157 6.613c-.269.288-.269.734 0 1.022l6.157 6.612c.518.558 1.251.877 2.012.877h12.88c1.517 0 2.75-1.233 2.75-2.75v-10.5c0-1.517-1.233-2.75-2.75-2.75zm-1.768 10.819c.376.405.353 1.038-.052 1.414-.192.179-.437.267-.681.267-.269 0-.536-.107-.732-.319l-2.517-2.712-2.518 2.711c-.196.212-.464.319-.732.319-.244 0-.488-.088-.681-.267-.404-.376-.428-1.009-.052-1.414l2.619-2.818-2.618-2.819c-.376-.405-.353-1.038.052-1.414.403-.376 1.038-.354 1.413.052l2.518 2.711 2.518-2.711c.374-.406 1.009-.428 1.413-.052s.428 1.009.052 1.414l-2.62 2.819z" fill="#ffffff" data-original="#000000" /> </g> </svg> </button>';
const doneTaskButton =
  '<button class="doneTask"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve" > <g> <g xmlns="http://www.w3.org/2000/svg"> <path d="m256 0c-141.49 0-256 114.5-256 256 0 141.49 114.5 256 256 256 141.49 0 256-114.5 256-256 0-141.49-114.5-256-256-256zm-60.914 363.99s-88.422-88.458-94.778-94.802c-14.139-14.139-14.139-37.147 0-51.274 14.175-14.175 37.099-14.175 51.274 0l57.244 57.244c7.118 7.118 18.67 7.069 25.728-.085l125.69-127.502c14.127-14.332 37.208-14.429 51.455-.181 14.03 14.03 14.115 36.942.181 51.081-136.493 138.486-162.414 165.507-162.414 165.507-14.985 14.984-39.383 14.997-54.38.012z" fill="#50d352" data-original="#000000" /> </g> </g> </svg> </button>';

addForm.addEventListener('submit', () => {
  event.preventDefault();
  let taskText = event.target.childNodes[1].value;
  addTask(taskText);
});

async function GetItems() {
  const response = await fetch('/items', {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  if (response.ok === true) {
    const items = await response.json();
    createTasks(items);
  }
}

GetItems();

// Array.from(document.getElementsByTagName("li")).forEach((task) => {
//   task.addEventListener("click", () => {
//     console.log(task.getAttribute("data-id"));
//   });
// });

// let doneButtons = Array.from(document.querySelectorAll('.doneTask'))

// doneButtons.forEach(element => {
//     console.log(element.parentNode);
// });

const createTasks = (tasksArray) => {
  tasksArray.forEach((task) => {
    let taskLi = document.createElement('li');
    taskLi.classList = task.done ? 'complete' : ''
    taskLi.setAttribute('data-id', task.id);
    taskLi.setAttribute('data-created', task.createdAt);
    taskLi.setAttribute('data-updated', task.updatedAt);
    taskLi.innerHTML += `<span class="taskText">${task.text}</span>`;
    taskLi.innerHTML += doneTaskButton;
    taskLi.innerHTML += deleteTaskButton;
    tasksPlace.appendChild(taskLi);
  });
};
