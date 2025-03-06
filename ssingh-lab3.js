// Sengar Vikant Pratap Singh
// ITMD 541-01 Graduate Student

// Exercise 1: minMaxAverage
function minMaxAverage(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / numbers.length;
    console.log(`Total Numbers: ${numbers.length}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

// Test cases for Exercise 1
minMaxAverage([10, 20, 30, 40, 50]);
minMaxAverage([3, 8, 15, 22, 35, 47, 59]);
minMaxAverage([99, 77, 55, 33, 11]);

// Exercise 2: countVowels
function countVowels(word) {
    let vowels = word.match(/[aeiou]/gi);
    let count = vowels ? vowels.length : 0;
    console.log(`${word}: ${count} vowels`);
}

// Test cases for Exercise 2
countVowels("Programming");
countVowels("Technology");
countVowels("Artificial");

// Exercise 3: sortNumbers
function sortNumbers(numbers) {
    let sortedArray = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: ${numbers} -> Sorted Array: ${sortedArray}`);
}

// Test cases for Exercise 3
sortNumbers([45, 12, 89, 32, 67]);
sortNumbers([1000, 500, 200, 800, 300]);
sortNumbers([7, 14, 3, 8, 21, 5]);

// Exercise 4: celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
    let celsiusNum = parseFloat(celsius);
    let fahrenheit = (celsiusNum * 9/5) + 32;
    console.log(`${celsiusNum.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for Exercise 4
celsiusToFahrenheit(15);
celsiusToFahrenheit(100);
celsiusToFahrenheit("-5");
celsiusToFahrenheit("22.5");

// Exercise 5: Sorting people by age and introducing them
function sortPeopleByAge(people) {
    let sortedPeople = people.sort((a, b) => a.age - b.age);
    let introductions = sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
    console.log(introductions);
}

// Test cases for Exercise 5
let newPeopleArray = [
    { name: 'Liam', age: 34, city: 'Toronto' },
    { name: 'Noah', age: 28, city: 'Vancouver' },
    { name: 'Emma', age: 31, city: 'Calgary' },
    { name: 'Sophia', age: 27, city: 'Ottawa' },
    { name: 'Lucas', age: 22, city: 'Montreal' }
];
sortPeopleByAge(newPeopleArray);

let anotherNewPeopleArray = [
    { name: 'Mia', age: 45, city: 'Chicago' },
    { name: 'Ethan', age: 38, city: 'Houston' },
    { name: 'Oliver', age: 50, city: 'Dallas' },
    { name: 'Amelia', age: 42, city: 'Boston' },
    { name: 'Benjamin', age: 37, city: 'San Jose' }
];
sortPeopleByAge(anotherNewPeopleArray);

let thirdNewPeopleArray = [
    { name: 'Ava', age: 19, city: 'Seattle' },
    { name: 'Henry', age: 23, city: 'Austin' },
    { name: 'Isabella', age: 21, city: 'Denver' },
    { name: 'Jack', age: 20, city: 'Miami' },
    { name: 'Sophia', age: 18, city: 'Las Vegas' }
];
sortPeopleByAge(thirdNewPeopleArray);
