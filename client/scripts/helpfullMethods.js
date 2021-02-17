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

  //   tasksPlace.appendChild(taskLi);
  dynamicTasks.push(taskLi);

  taskLi.addEventListener('click', () => {
    console.log(event.currentTarget.getAttribute('data-id'));
  });
  return dynamicTasks;
};

const createTasks = (tasksArray) => {
  console.log(tasksArray);
  tasksArray.sort(function (a, b) {
    return a.updatedAt - b.updatedAt; // for ascending order
  });
  console.log(tasksArray);
  tasksArray.forEach((task) => {
    createOneTask(task).forEach((item) => {
      tasksPlace.appendChild(item);
    });
  });
};
