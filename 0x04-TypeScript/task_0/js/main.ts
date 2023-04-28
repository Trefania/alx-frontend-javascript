interface Student{
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "nyasha",
  lastName: "chakweva",
  age: 22,
  location: "cape town"
};

const student2: Student = {
  firstName: "tariro",
  lastName: "vhareta",
  age: 23,
  location: "wellington"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Get a reference to the table element in the DOM
const table = document.getElementById("students-table");

// Loop through the studentsList array and add a new row for each student
studentsList.forEach((student) => {
  // Create a new row element
  const row = document.createElement("tr");

  // Create a cell for the student's first name
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  // Create a cell for the student's location
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  // Append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table
  table.appendChild(row);
});
