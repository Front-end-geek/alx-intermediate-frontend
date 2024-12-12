"use strict";
// Creating two students
const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
};
const student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles',
};
// Array of students
const studentsList = [student1, student2];
// Function to render table
function renderTable(students) {
    const table = document.createElement('table');
    table.setAttribute('border', '1');
    // Creating the header row
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell();
    headerCell1.textContent = 'First Name';
    const headerCell2 = headerRow.insertCell();
    headerCell2.textContent = 'Location';
    // Inserting rows for each student
    students.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = student.firstName;
        const cell2 = row.insertCell();
        cell2.textContent = student.location;
    });
    // Append the table to the document body (or a specific container)
    document.body.appendChild(table);
}
// Call the function to render the table with studentsList
renderTable(studentsList);
