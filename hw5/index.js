//task1

const sumCounter = function () {
	let sum = 0;
	return function(num) {
	  return sum += num;
	};
  };
  
  const counter = sumCounter();

console.log(counter(3)) // 3
console.log(counter(5)) // 8
console.log(counter(228)) // 236

//task2

const foo = function () {
	let array = [];
	return function(num) {
		if(!num) {
			return array = [];
		}
		else {
		array.push(num)
		 return array;
		};
	};
  };
  
  const counterNew = foo();

console.log(counterNew(3))
console.log(counterNew(5))
console.log(counterNew({name: 'Vasya'}))
console.log(counterNew())
console.log(counterNew(10))

//task3

function getTimeCheck() {
	let time = 0;
	return function firstCall(){
		if (time == 0) {
			time = new Date().getTime();
			let firstC = 'Enabled'
        	return firstC;
        }else{
			let callTime = new Date().getTime();
    		let result = Math.abs(time - callTime) // сбрасываем знак -
    		time = callTime; //замыкание
    		return Math.ceil(result / 1000); //чтобы отображалось в секундах
		}
	}
    
}

const getTime = getTimeCheck();
