function writeCards(names,event){
const massages=[];
for (let i = 0; i < names.length; i++) {
 const massage =`Thank you,${names[i]},for the wonderful $ {event},gift!`;  
  massages.push(massage); 
}
return massages;
}
const names=["Ada","Brendan","Ali"];
const avent="birthday";
writeCards(names,avent);
console.log(writeCards(names,avent));
console.log(countDown(10));      
console.log(countDown(4));

function countDown(number) {
  for(let i=number;i >=0;i--){
      console.log(i);
  }  
}   
