const works = {
    "task1": { "title": "Task 1", "description": "This is the content of Task 1.", "bgClass": "task1-bg" },
    "task2": { "title": "Task 2", "description": "This is the content of Task 2.", "bgClass": "task2-bg" },
    "task3": { "title": "Task 3", "description": "This is the content of Task 3.", "bgClass": "task3-bg" }
};

document.addEventListener("DOMContentLoaded", () => {
    const workList = document.getElementById("work-list");
    const taskTitle = document.getElementById("task-title");
    const taskDescription = document.getElementById("task-description");
    const pageBackground = document.getElementById("page-background");

    const projectNames = ["Project 1", "Project 2", "Project 3"];

    Object.entries(works).forEach(([key, work], index) => {
        const listItem = document.createElement("li");
        listItem.textContent = projectNames[index];

        listItem.addEventListener("click", () => {
            taskTitle.textContent = work.title;
            taskDescription.textContent = work.description;

            pageBackground.className = work.bgClass;
        });

        workList.appendChild(listItem);
    });
});
