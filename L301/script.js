var text = prompt('შეიყვანეთ ტექსტი', '');

let isforbidden = false;

let forbiddenWords = ['რეკლამა', 'ვირუსი', 'მარკეტინგი']


for (let i = 0; i < forbiddenWords.length; i++) {
    if (text.indexOf(forbiddenWords[i]) != -1) {
        isforbidden = true;
    }
}


if (isforbidden) {
    alert('აკრძალული სიტყვა!');
}
else {
    alert('აკრძალული სიტყვა არ მოიძებნა!');
}





// for(var i=2; i<20; i++){

