async function GetItems(order, completeness) {
  try {
    let queryString = {
      order: order,
    };
    if (completeness != 'all') queryString.done = completeness;

    tasksPlace.innerHTML = await '';
    dynamicTasks = [];
    const response = await fetch('/items?' + new URLSearchParams(queryString), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });
    if (response.ok) {
      const items = await response.json();
      if (items.length > 0) {
        await createTasks(items);
      } else {
        tasksPlace.innerHTML = '<p>Задач нет. Создайте новую!</p>';
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function AddTask(itemText) {
  let reqBody = { text: itemText };
  const response = await fetch('/items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(reqBody),
  });
  if (response.ok === true) {
    const item = await response.json();
    if (dynamicTasks.length === 0) {
      tasksPlace.innerHTML = await '';
    }
    checkFilters();
  }
}

async function deleteTask(id) {
  const response = await fetch(`/items/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok === true) {
    checkFilters();
  }
}

const editTaskText = async (text, id) => {
  editModal.querySelector('input').value = text;
  editModal.classList.add('visible');
  editModal.querySelector('form').onsubmit = () => {
    event.preventDefault();
    let taskText = event.currentTarget.querySelector('input').value;
    if (taskText.trim().replace(/[ ]{1,}/, ' ') != '') {
      (async function editTask() {
        const response = await fetch(`/items/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: taskText.trim() }),
        });
        if (response.ok) {
          checkFilters();
        }
        editModal.classList.remove('visible');
      })();
    } else {
      editModal.classList.remove('visible');
    }
  };
};

const editTaskDone = async (class_list, id) => {
  let completed = class_list.value.includes('complete');
  (async function editTask() {
    const response = await fetch(`/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !completed }),
    });
    if (response.ok) {
      checkFilters();
    }
  })();
};
