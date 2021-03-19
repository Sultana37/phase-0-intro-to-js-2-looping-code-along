// Code your solutions in this file
const names=["Lisa","Kaitlin","Jan"];
const celeb =["surprise"];
function writeCards(names,celeb){
    for (let i = 0; i < names.length; i++){
        console.log(`Thank you ${names[i]}, for the wonderful ${celeb} gift`);
        debugger;
    }
    return names;
}
writeCards(names,celeb);

function countDown(number){
let i = 0;
while (number >= 0){
    i++;
    console.log({number});
    number--;
}
countDown(10);
countDown(4);


}