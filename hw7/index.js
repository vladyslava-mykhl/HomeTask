
//task1

const searchCandidatesByPhoneNumber = phoneNumber => {
	return condidateArr.filter(candidate => {
			return candidate.phone.match(/([0-9])/g).join('').includes(phoneNumber.match(/\d/g).join(''));
	});
	};

	console.log(searchCandidatesByPhoneNumber('43')) 	
	console.log(searchCandidatesByPhoneNumber('1994')) 
	console.log(searchCandidatesByPhoneNumber('450')) 
	console.log(searchCandidatesByPhoneNumber('+1 (994) 504-3757')) 


//task2

const getCandidateById = (id) => {
	let item = condidateArr.find(condidate => condidate._id == id)
	item.registered = item.registered.substring(0, 10).split('-').reverse().join('/')
	return item;
	};

	console.log(getCandidateById('5e216bc9a6059760578aefa4'))

//task3


const sortCandidatesArr = parametr => {

	const customSort = item => item.balance.slice(1).replace(',', '');
	let sortArray = [...condidateArr]
		if(parametr == "asc") {
			return sortArray.sort((a, b) => {
				if(customSort(a) > customSort(b)){
					return 1;
				}
				if(customSort(a) < customSort(b)){
					return -1;
				}
				return 0;
			}) 
		}
		if(parametr == "desc") {
			return sortArray.sort((a, b) => {
				if(customSort(a) > customSort(b)){
					return -1;
				}
				if(customSort(a) < customSort(b)){
					return 1;
				}
				return 0;
			}) 
		}
		return sortArray;
}

console.log(sortCandidatesArr("asc"));
console.log(sortCandidatesArr("desc"));
console.log(sortCandidatesArr());