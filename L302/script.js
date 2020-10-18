var text = prompt('შეიყვანეთ ტექსტი', '');

let isforbidden = false;

for (let i = 0; i < 15; i++) {
    if (text.length < 15) {
        isforbidden = true;
    }
}

if (isforbidden) {
    alert(text);
}
else{
    alert(str = text.substr(0,15) + '...');
}