// Create a simple table to display students info
interface Students {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Students = {
    firstName: "Fernando",
    lastName: "Albert",
    age: 23,
    location: "Ponce"
};

const student2: Students = {
    firstName: "Nayelis",
    lastName: "Alfinez",
    age: 22,
    location: "Villalba"
};

const studentsList: Students[] = [student1, student2];

// create the table
  const table: HTMLTableElement = document.createElement("table");
  const thead = document.createElement("thead");
  thead.innerHTML = "<tr><th>First Name</th><th>Location</th></tr>";
  table.appendChild(thead);
  
  const tbody = document.createElement("tbody");
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
