var text = prompt('შეიყვანეთ სტუდენტის სახელი', '');

let students = ['ნიკა','ნინო','ნინი','ნუკრი','ნარგიზა'];

let names = [];

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
    if(students[i].indexOf(text) != -1){
        names.push(students[i]);
     }
}

let namesList = names.join(', ');

alert(namesList);




