// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);


//Build a function named writeCars() that accepts two arguments.
function writeCards(inputArray, input2){
    let thankYou = [];
    for (let x = 0; x < inputArray.length; x++){
        thankYou = [...thankYou, (`Thank you, ${inputArray[x]}, for the wonderful ${input2} gift!`)];
        debugger;
    }
    console.log (thankYou)
return (thankYou)
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(i){
    while (i >= 0){
        console.log(i);
        i--;
    }
}

