
//task1

const array = ['Vasya', 'Petya', 'Alexey']

function removeUser(arr, value) { 
    arr.splice(value, 1);
    return arr;
}

removeUser(array, 0)


//task2

const obj = { name: 'Vasya', age: 1}

function getAllKeys(obj) { 
	let objKeys = Object.keys(obj);
	return objKeys;
}

getAllKeys(obj)

//task3

function getAllValues(obj) { 
	let objValues = Object.values(obj);
	return objValues;
}

getAllValues(obj)

//task4

const firstObj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const newArr = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

function insertIntoarr(object, id) {
	newArr.splice(id-1, 0, object);
	return newArr;
}

insertIntoarr(firstObj, 1)


//task5

class Condidate {
	constructor(condidate) {
		this.address = condidate.address;
	};

	get state (){
		let address = this.address.split(",");
		return address[2];
    }
};

const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state);

//task6

function getCompanyNames() {
	let companyArr = condidateArr.map(arr => arr.company);
	uniqueArray = companyArr.filter((item,index) => index === companyArr.indexOf(item));
	return uniqueArray;
}
getCompanyNames()

//task7

function getUsersByYear(year) {
	return condidateArr.filter(condidate => condidate.registered.substring(0,4) == year).map(condidate => condidate._id);
}
	
const usersByYear = getUsersByYear(2017)
console.log(usersByYear);

 // task8

 function getCondidatesByUnreadMsg(num) {
	return condidateArr.filter(condidate => condidate.greeting.split(' ')[5] == num)
	};

const resultByUnreadMsg = getCondidatesByUnreadMsg(5)
console.log(resultByUnreadMsg);

 //task9

function getCondidatesByGender(item) {
	return condidateArr.filter((condidate) => condidate.gender === item);
}
getCondidatesByGender()

//task10

const customJoin = function (split){
	if (split === undefined) {
        split = ',';
	}
	let string = '';
	for(let i = 0; i < this.length; i++){
		if(i == this.length - 1){
			string = string + this[i];
			return string;
		}
		string = string + this[i] + split;
		
	}
	return string;
}

Object.defineProperty(Array.prototype, 'customJoin', {
    value: customJoin,
    enumerable: false,
})

console.log(array.customJoin(''))
