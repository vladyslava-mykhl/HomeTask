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
n = 6;
let str = '';
let str1 = '';
let str2 = '';

 
 for (let i = 0; i < n-1 ; i++) {
   str = str + '-';
 }
   for (let i = 0; i < n-1 ; i ++) {
   str1 = str1 + '#';
   console.log(str +  str1  + str); 
}

// for (let i = 1; i < n-1 ; i++) {
//    str2 = str2 + '##';
//    console.log(str +  str1 + str2  + str);
// }
   

   
   