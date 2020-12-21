//task1

const Employee = function(obj){

  for (let key in obj) {
    this[key] = obj[key]
  }

  Object.assign(this, obj);
}

let employeeObj = new Employee(emplyeeArr[3])

console.log(employeeObj);

/*
function Employee2(obj){
	for (let key in obj) {
		this[key] = obj[key]
	  }
	
	Object.assign(this, obj);
}
let employeeObj2 = new Employee2(emplyeeArr[0])

console.log(employeeObj2);

*/

 //task2

Employee.prototype.getFullName = function(){
  return this.surname +' '+ this.name;
}

console.log(employeeObj.getFullName());

 //task3


let createEmployesFromArr = (arr) => {
	const createdArr = [];
	for (let key in arr) {
		createdArr.push(new Employee(emplyeeArr[key]));
	}
	return createdArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr)

//task4

const getFullNamesFromArr = (arr) => {
	const fullNameArr = [];
  	for (const key in arr) {
		fullNameArr.push(emplyeeConstructArr[key].getFullName());
	}
	return fullNameArr;
}

getFullNamesFromArr(emplyeeConstructArr);
//console.log(getFullNamesFromArr(emplyeeConstructArr));


//task5

const getMiddleSalary = (arr) => {
	let middleSalary = 0;
	for (const key in arr) {
		middleSalary += emplyeeConstructArr[key].salary;
	}
	middleSalary = Math.round(middleSalary / emplyeeConstructArr.length);
	return middleSalary;
}

console.log(getMiddleSalary(emplyeeConstructArr)); /// 23886
// getMiddleSalary(emplyeeConstructArr)

//task6

const getRandomEmployee = (arr) => {
		let randEmp = arr[Math.floor(Math.random() * emplyeeConstructArr.length)];
		return randEmp;
	}
console.log(getRandomEmployee(emplyeeConstructArr));
//getRandomEmployee(emplyeeConstructArr)

