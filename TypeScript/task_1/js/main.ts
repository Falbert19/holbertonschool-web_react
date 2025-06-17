// Interface for a Teacher object
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yeasrOfExperience?: number;
    location: string;
    [key: string]: any; // additional properties optional
}

const teacher3: Teacher = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "New York",
    contract: false,
};

console.log(teacher3);

// Interface that extends another interface
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "Pedro",
    lastName: "Pascal",
    fullTimeEmployee: true,
    yeasrOfExperience: 10,
    location: "Juana Diaz",
    numberOfReports: 5,
};

console.log(director1);

//print Teacher function
interface printTeacherFuntion {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFuntion = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher("John", "Doe"));

//StudentClass + interfaces

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

//Class behavior interface
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

//Class implementastion
const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName
    }
}

const student = new StudentClass("Fernando", "Nayelis");
console.log(student.displayName());  //Fernando
console.log(student.workOnHomework());  // Current