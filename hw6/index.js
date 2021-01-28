
//task1

const array = ['Vasya', 'Petya', 'Alexey']

function removeUser(arr, value) { 
    let index = arr.indexOf(value);
    arr.splice(index, 1);
    return arr;
}

removeUser(array, 1)

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
	return console.log(newArr);
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
	
 console.log(getUsersByYear(2017))

 // task8

 function getCondidatesByUnreadMsg(num) {
	return condidateArr.filter(condidate => condidate.greeting.split(' ')[5] == num)
	};

	console.log(getCondidatesByUnreadMsg(5))


 //task9

function getCondidatesByGender(item) {
	return condidateArr.filter((condidate) => condidate.gender === item);
}
getCondidatesByGender()

//task10

// const customReduce = function(callback, accum) {
//     let index = 0;
//     if (accum === undefined) {
//         accum = this[0];
//         index = 1;
//     }
//     for (let i = index; i < this.lenght; index++) {
//         accum = callback((accum, this[0]), i, this);
//     }
//     return accum;
// }


