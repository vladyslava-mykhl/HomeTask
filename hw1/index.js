console.log('Task1:')
for (let i=1; i<=10; i++) {
   if(i % 3 == 0) {
   console.log('FizBuz')
   }else if(i % 2 == 0) {
   console.log('Fiz') 
   }else if(i % 2 !== 0) {
   console.log('Buz')
   }
}

console.log('Task2:')
let number = 7;
let factorial = 1;

for (let i = 0; i<number; i++) {
   factorial = factorial*(number-i);
}
console.log('Факториал числа '+ number + ' = ' + factorial);

console.log('Task3:')
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

console.log('Наименьшее количество пачек бумаги, которое требуется в офис на 8 недель: ' + Math.ceil((consumptionPerWeek/sheetsInReamPaper)*weeksAmount))

console.log('Task4:')
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 34;

let roomInPorch = roomsOnFloor*floors
let porch = Math.ceil(roomNumber/roomInPorch)

console.log('Подъезд = ' + porch)
console.log('Этаж = ' + Math.floor(1+ ((roomNumber - 1) % roomInPorch) / roomsOnFloor));

console.log('Task5:')
const n = 28;
let str1 = '';

 for (let j=0; j < n; j++){
   if (j==0){
      str1 = str1 + '#';
   } else{
      str1 = str1 + '#' + '#';
   }
   let str = '';
   for (let i = 1; i < n; i ++){
      str= str + '-';
   }
      console.log(str.slice(0,str.length - j) + str1 + str.slice(0, str.length - j));
}
  
   