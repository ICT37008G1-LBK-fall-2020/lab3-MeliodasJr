var howmany = prompt('რამდენი სტუდენტის შეყვანა გსურთ გეთაყვა?', '');

let students = [];

for (let i = 0; i < howmany; i++) {
    let student = prompt('შეიყვანეთ სტუდენტი', '');
    students.push(student);
}

let studentList = students.join(', ');

alert(studentList);