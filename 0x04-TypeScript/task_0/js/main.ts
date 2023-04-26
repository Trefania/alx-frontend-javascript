interface Student{
	firstName: string,
	lastName: string,
	age: number,
	location:string
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

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
