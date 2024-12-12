interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsofExperience?: number;
  location: string;
  [key: string]: any;
}

// Correctly placed interface Directors outside the class
interface Directors extends Teacher {
  numberOfReports: number;
}

class TeacherImplementation implements Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsofExperience?: number;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsofExperience?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsofExperience = yearsofExperience;

    // Using the Teacher interface to create an object
    const teacher3: Teacher = {
      firstName: 'John',
      fullTimeEmployee: false,
      lastName: 'Doe',
      location: 'London',
      contract: false, // Adding extra attribute
    };

    console.log(teacher3);

    interface printTeacherFunction {
      (firstName: string, lastName: string): string;
    }

    const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
      return `${firstName[0]}. ${lastName}`;
    }

    // Using the Directors interface to create a director object
    const director1: Directors = {
      firstName: 'John',
      lastName: 'Doe',
      fullTimeEmployee: true,
      location: 'London',
      numberOfReports: 17,
    };

    console.log(director1);
  }
}

// Interface for the constructor of the Student class
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

// Interface for the Student class itself
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the Student interface
class StudentClass implements Student {
  firstName: string;
  lastName: string;

  // Constructor accepting firstName and lastName arguments
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to simulate working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to return the student's firstName
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("John", "Doe");
console.log(student1.workOnHomework());  // Output: Currently working
console.log(student1.displayName());    // Output: John
