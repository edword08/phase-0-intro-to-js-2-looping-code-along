// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ['teddy bear', 'drone', 'doll'] 

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);*/

const names = ["Guadalupe", "Ali", "Aki"];
const myEvent = "surprise";

function writeCards(name, event) {
  let result = [];
  for (let i = 0; i < name.length; i++) {
    result.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return result;
}

writeCards(names, myEvent);

function countDown(number) {
  let countDown = number;
  while (countDown >= 0) {
    console.log(countDown--);
  }
}

countDown(10);
