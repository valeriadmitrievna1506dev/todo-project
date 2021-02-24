const createOneTask = (data) => {
  let taskLi = document.createElement("li");

  taskLi.classList = data.done ? "complete" : "";
  taskLi.setAttribute("data-id", data.id);
  taskLi.setAttribute("data-created", data.createdAt);
  taskLi.setAttribute("data-updated", data.updatedAt);

  taskLi.innerHTML += `<span class="taskText">${data.text}</span>`;
  taskLi.innerHTML += doneTaskButton;
  taskLi.innerHTML += editTaskButton;
  taskLi.innerHTML += deleteTaskButton;

  // tasksPlace.appendChild(taskLi);
  tasksPlace.prepend(taskLi);

  taskLi.querySelector(".deleteTask").addEventListener("click", () => {
    [...filterPanel.querySelectorAll("input")].forEach((inp) => {
      if (inp.checked)
        deleteTask(
          inp.id,
          event.currentTarget.parentElement.getAttribute("data-id")
        );
    });
  });
  taskLi.querySelector(".editTask").addEventListener("click", () => {
    [...filterPanel.querySelectorAll("input")].forEach((inp) => {
      if (inp.checked)
        editTaskText(
          inp.id,
          event.currentTarget.parentElement.childNodes[0].innerText,
          event.currentTarget.parentElement.getAttribute("data-id")
        );
    });
  });
  taskLi.querySelector(".doneTask").addEventListener("click", () => {
    [...filterPanel.querySelectorAll("input")].forEach((inp) => {
      if (inp.checked)
        editTaskDone(
          inp.id,
          event.currentTarget.parentElement.classList,
          event.currentTarget.parentElement.getAttribute("data-id")
        );
    });
  });

  dynamicTasks.push(taskLi);
  return taskLi;
};

const createTasks = (tasksArray) => {
  tasksPlace.innerHTML = "";
  tasksArray.forEach((task) => {
    tasksPlace.prepend(createOneTask(task));
  });
};

const checkFilters = () => {
  let request = {};
  [...orderButtons].forEach((btnOrder) => {
    if (btnOrder.checked) request.order = btnOrder.id;
  });
  [...completenessButtons].forEach((btnCompleteness) => {
    if (btnCompleteness.checked) request.done = btnCompleteness.id;
  });
  GetItems(request.order, request.done);
}
