
class Abiturient {
    constructor(id, lastName, firstName, middleName, address, phone, marks) 
    {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.address = address;
    this.phone = phone;
    this.marks = marks;
    }
    
    getSredBall()
    {

    let sum = 0;

    for(let i = 0; i < this.marks.length; i++)
    {
    sum += this.marks[i];
    }

    return sum / this.marks.length;

    }

    getNeutMarks(){
        for(let i = 0; i < this.marks.length; i++)
        {
        if (this.marks[i] <= 2){
            
            return this.lastName;
        }
        }
    }
    }

let abiturient1 = new Abiturient(1, "Иванов", "Иван", "Иванович", "ул.Пушкина, д5, к10", "+375 29 874 32 45", [5, 4, 4, 5, 3]);
let abiturient2 = new Abiturient(2, "Петров", "Петр", "Петрович", "ул.Колесникова, д15, к20", "+375 29 858 06 85", [4, 3, 5, 4, 4]);
let abiturient3 = new Abiturient(3, "Сидоренко", "Сидор", "Сидорович", "ул.Казинца, д10, к5", "+375 29 85 807 85", [3, 4, 3, 2, 5]);

console.log(abiturient1.getSredBall()); // 4.2
console.log(abiturient2.getSredBall()); // 4
console.log(abiturient3.getSredBall()); // 3.4

console.log(abiturient3.getNeutMarks);