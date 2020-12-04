console.log("Task 1:")
  const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
}

for(let key in citiesAndCountries) //выводит сами индексы 

console.log(key + ' - это ' + citiesAndCountries[key]);

console.log("Task 2: getArray(your number)")
function getArray(amount){
	let arr = [];

	if(amount % 3 === 0 && amount > 0) {
		for(let i = 0, j = 0; i < (amount/3); i++, j+=3) {
			let	subarray = [1, 2, 3];
			subarray = subarray.map(el => el + j);
			arr.push(subarray);
		}
		return arr;
	} else 
	return 'Заданное число должно быть положительным и кратно трем';
}


console.log("Task 3: getNameOfDay(lang, day)")
function getNameOfDay(lang, day){
  const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
  if (lang === 'ru' || lang === 'en') {
    if (day > 0 && day < 8 && day % 1 === 0) {
    return namesOfDays[lang][day-1];
  } else return 'Ошибка: Такого дня недели нет';
} else return 'Ошибка: Такого дня недели нет';
}

  console.log("Task 4:")
  let numbers = [-10, 8, 20.5, 15, -42, 7, 77.6, 3];

  function sumArr(arr) {
    let filtrArr = arr.filter(function(numbers) {
      return numbers > 0 && numbers % 1 === 0;
    });
    filtrArr.sort(function(a,b) {
      return a-b;
    });
      return filtrArr[0] + filtrArr[1];
  }
    console.log('Сумма двух наименьших положительных чисел из массива = ' + sumArr(numbers));
  
  
