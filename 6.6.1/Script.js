
let text = prompt("Введите слово или фразу для проверки");

let rightToleftText = "";
let letterNum = text.length;

for (let index = 1; index <= text.length; index++ ) {

    c = text.slice(letterNum - 1, letterNum);

    rightToleftText = rightToleftText + c;

    letterNum = letterNum - 1;

}

if (rightToleftText.toLowerCase() === text.toLowerCase()) {

    console.log(`Слово ${text} является палиндромом`)

}
else {

    console.log(`Слово ${text} не является палиндромом`)

}
