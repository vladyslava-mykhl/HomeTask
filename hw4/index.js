id = 1;
listOfStudents = [];
class Student {
    selfPayment = [];
    rating(students){
            
        for(this.student of students){
            if(this.student.ratingPoint >= 800){
                this.selfPayment.push(this.student);
            }
        }

        let sortSelfPayment = this.selfPayment.sort(function(a, b){
            if(a.ratingPoint == b.ratingPoint){
                return b.schoolPoint - a.schoolPoint;
            }
            if(a.ratingPoint < b.ratingPoint){
                return 1;
            }
            if(a.ratingPoint > b.ratingPoint){
                return -1;
            }
        });
        for(this.student of students){
            if(sortSelfPayment.slice(0, 5).includes(this.student)){
                this.student.isSelfPayment = false;
            }else{
                this.student.isSelfPayment = true;
            }
        }
        //console.log(sortSelfPayment)
    }

    isSelfP(lst){
        for(this.stud of lst){
            if(this.stud.isSelfPayment == false){
                console.log(this.stud)
            }
        }
    }

    constructor(enrolle){   
        this.listOfStudents = listOfStudents
        this.name = enrolle.name
        this.surname = enrolle.surname
        this.ratingPoint = enrolle.ratingPoint
        this.schoolPoint = enrolle.schoolPoint
        try{
            for(this.student of enrolle){
                this.id = id++
                this.student.id = this.id++;
                this.listOfStudents.push(this.student);
            }
        }catch(e){
            this.id = id++
            enrolle.id = this.id++
            this.listOfStudents.push(enrolle);
        }
        this.rating(this.listOfStudents);
    }
}

new Student(studentArr);
new Student({
    name: 'xxxxxxxxxxxx',
    surname: 'yyyyyyyyyy',
    ratingPoint: 1234,
    schoolPoint: 1200,
    course: 2,
})

new Student({
    name: 'aaaaaaaaaaaxxxxxxxxxxxx',
    surname: 'yyyyyyyyyy',
    ratingPoint: 4324,
    schoolPoint: 1200,
    course: 2,
})
new Student({
    name: 'asdasdasdaxxxxxxxxxxxx',
    surname: 'yyyyyyyyyy',
    ratingPoint: 1023400,
    schoolPoint: 1200,
    course: 2,
})
let std = new Student({
    name: 'asdasdasdaxxxxxxxxxxxx',
    surname: 'yyyyyyyyyy',
    ratingPoint: 1023400,
    schoolPoint: 1200,
    course: 2,
})
std.isSelfP(listOfStudents)


//task2

 class CustomString {

    constructor(){}
 
reverse = function(string) {
 return string.split('').reverse().join('');
 }
 
ucFirst = function(string) {
    return string[0].toUpperCase()+string.slice(1);
 }
 
ucWords = function(string) {
 let arr = string.split(' ');
 for (this.key in arr) {
 arr[this.key] = arr[this.key].substr(0, 1).toUpperCase() + arr[this.key].substr(1);
 }
 return string = arr.join(' ');
 }
 }

 const myString = new CustomString();

 console.log(myString.reverse('qwerty')); //выведет 'ytrewq'
 console.log(myString.ucFirst('qwerty')); //выведет 'Qwerty'
 console.log(myString.ucWords('qwerty qwerty qwerty')); //выведет 'Qwerty Qwerty Qwerty
 

//task3

class Validator {

    constructor(){}

    checkIsEmail(str) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str);
    }

    checkIsDomain(str) {
        return /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/.test(str);
    }
    checkIsDate(str) {
        return /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/.test(str);
      }
    
       checkIsPhone(str) {
        return /(?:\w)(?:(?:(?:(?:\+?3)?8\W{0,5})?0\W{0,5})?[34569]\s?\d[^\w,;(\+]{0,5})?\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d(?!(\W?\d))/.test(str)
      }
    }
    

var validator = new Validator();

console.log(validator.checkIsEmail('vasya.pupkin@gmail.com')); // true
console.log(validator.checkIsDomain('google.com')); // true
console.log(validator.checkIsDate('30.11.2019')); // true
console.log(validator.checkIsPhone('+38 (050) 937-99-92')); // если код страны Украинский, то возвращаем true иначе false

