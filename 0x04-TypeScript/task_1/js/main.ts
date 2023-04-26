interface Teacher {
	firstName: string; 
	lastName: string;
	readonly fullTimeEmployee: boolean; //readonly to ensure they cannot be modified after initialization
	yearsOfExperience?: number; 
	readonly location: string; //syntax allows any additional attributes to be added
	[key: string]: any;
}

//teacher initialized with the required attributes 
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

//Printing teachers
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}
function printTeacher(firstName: string, lastName: string): string {
  return firstName.charAt(0) + ". " + lastName;
}

console.log(printTeacher("John", "Doe")); // J. Doe

//Writing a class
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public workOnHomework(): string {
    return "Currently working";
  }

  public displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // John
console.log(student.workOnHomework()); // Currently working
