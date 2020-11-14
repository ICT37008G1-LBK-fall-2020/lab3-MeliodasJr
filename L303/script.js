currency = prompt('შეიყვანეთ ვალუტა და ოდენობა:', '');

let usd;
let answer1;
let answer2;
let gel;

if(currency.includes('$')){
    answer1 = currency.slice(1);
    usd = answer1 * 2.6;
    alert('L' + usd);
}

if(currency.includes('L')){
    answer2 = currency.slice(1);
    gel = answer2 / 2.6;
    alert('$' + gel);
}