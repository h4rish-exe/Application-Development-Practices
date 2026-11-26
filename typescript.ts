// Parent Class
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Name: " + this.name);
    }
}

// Child Class (Inheritance)
class Student extends Person {
    private mark: number;

    constructor(name: string, mark: number) {
        super(name);
        this.mark = mark;
    }

    // Encapsulation
    getMark(): number {
        return this.mark;
    }

    // Polymorphism
    display(): void {
        super.display();
        console.log("Mark: " + this.mark);
    }
}

// Creating Object
let s1 = new Student("Arun", 90);

// Calling Method
s1.display();
console.log("Student Mark: " + s1.getMark());