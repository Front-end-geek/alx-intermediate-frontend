// Create Director interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Create Teacher interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Create a class Director that implements DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to Director tasks";
    }
}

// Create a class Teacher that implements TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director
}

function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks())
    }else {
        console.log(console.log(employee.workTeacherTasks()))
    }
}

//string literal type for subjects
type Subjects = "Math" | "History";

function teachClass(todayClass : Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    return "Teaching History";
}

// Test the function
console.log(createEmployee(200).workFromHome()); // Output: "Cannot work from home"
console.log(createEmployee(1000).workFromHome()); // Output: "Working from home"
console.log(createEmployee("$500").workFromHome()); // Output: "Working from home"
