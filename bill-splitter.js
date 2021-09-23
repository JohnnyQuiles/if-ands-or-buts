const prompt = require('prompt-sync')();

const bill = prompt('How much is the bill? '); 

const person1 = prompt (' Person 1 paid  : ');

const person2 = prompt (' Person 2 paid  : ');

const splitBill = bill / 2; 

const person1x = splitBill - person1;
const person2x = splitBill - person2;

if (person1 === person2 ) {

    console.log('none is owe');
} else if (person1 < splitBill ) {
    console.log('person 1 owes $', person2x);
} else  if (person2 <splitBill) {
    console.log('person 2 owes $', person2x);
} else{
    console.log('error'); 
}

