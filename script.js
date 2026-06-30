const form = document.getElementById("todoForm");
const tableBody = document.getElementById("taskTable");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    // Get values from form
    const task = document.getElementById("task").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    // Create table row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${task}</td>
        <td>${priority}</td>
        <td>${dueDate}</td>
        <td>Pending</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Append row to table
    tableBody.appendChild(row);

    // Delete button
    row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove();
    });

    // Clear form
    form.reset();
});