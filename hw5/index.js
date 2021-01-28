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


