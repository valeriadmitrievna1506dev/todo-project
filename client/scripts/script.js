const addForm = document.getElementById("addTaskForm");

addForm.addEventListener("submit", () => {
  event.preventDefault();
  let taskText = event.target.childNodes[1].value;
  addTask(taskText)
});

const addTask = async (text) => {
    try {
        const response = await fetch('/tasks', {
            method: "POST",
            body: text
        })
        if (response.ok) {
            const newTask = response.json()
            console.log(newTask);
        }
    } catch (error) {
        console.log(error);
    }
}

// Array.from(document.getElementsByTagName("li")).forEach((task) => {
//   task.addEventListener("click", () => {
//     console.log(task.getAttribute("data-id"));
//   });
// });

// let doneButtons = Array.from(document.querySelectorAll('.doneTask'))

// doneButtons.forEach(element => {
//     console.log(element.parentNode);
// });

