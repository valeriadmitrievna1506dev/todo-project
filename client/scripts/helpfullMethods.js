const createOneTask = (data) => {
  let taskLi = document.createElement('li');

  taskLi.classList = data.done ? 'complete' : '';
  taskLi.setAttribute('data-id', data.id);
  taskLi.setAttribute('data-created', data.createdAt);
  taskLi.setAttribute('data-updated', data.updatedAt);

  taskLi.innerHTML += `<span class="taskText">${data.text}</span>`;
  taskLi.innerHTML += doneTaskButton;
  taskLi.innerHTML += editTaskButton;
  taskLi.innerHTML += deleteTaskButton;

  tasksPlace.appendChild(taskLi);

  taskLi.addEventListener('click', () => {
    console.log(event.currentTarget.getAttribute('data-id'));
  });
  
  dynamicTasks.push(taskLi);
  return taskLi;
};

const createTasks = (tasksArray) => {
  tasksPlace.innerHTML = '';
  tasksArray.forEach((task) => {
    tasksPlace.appendChild(createOneTask(task));
  });
};
