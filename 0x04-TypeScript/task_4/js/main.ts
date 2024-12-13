import { Subjects } from '../js/subjects/Cpp';
import { Subjects as JavaSubjects } from '../js/subjects/Java';
import { Subjects as ReactSubjects } from '../js/subjects/React';

// Create and export constants for subjects
export const cpp = new Subjects.Cpp();
export const java = new JavaSubjects.Java();
export const react = new ReactSubjects.React();

// Create and export one Teacher object
export const cTeacher: Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// For Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
