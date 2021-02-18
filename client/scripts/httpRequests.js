async function GetItems() {
  tasksPlace.innerHTML = '';
  dynamicTasks = [];
  const response = await fetch('/items', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok === true) {
    const items = await response.json();
    if (items.length > 0) {
      await createTasks(items);
    } else {
      tasksPlace.innerHTML = '<p>Задач нет. Создайте новую!</p>';
    }
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
    createOneTask(item);
  }
}
