// Zadanie 1
const text1 = '44';
const text2 = '56';
console.log(text1 + text2);

// Zadanie 2
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
console.log(lorem.split(' ').length);

// Zadanie 3
const subString = 'amet';
console.log(lorem.substr(lorem.indexOf(subString), subString.length));
console.log(lorem.slice(lorem.indexOf(subString), 26));
console.log(lorem.substring(lorem.indexOf(subString), 26));

// Zadanie 4
const name = 'andrii';
const capitalizedName = name[0].toUpperCase() + name.slice(1);
console.log(capitalizedName);

// Zadanie 5
let url = 'https://warsawjs.com/workshops';
url = url.replace('.com', '.pl');
console.log(url);

// Zadanie 6 i 7
const age = prompt('Ile masz lat?');
const ofAge = Number(age) > 18;
console.log(ofAge ? 'Zapraszamy' : 'Nie masz 18 lat');

// Zadanie 8
let i = 1;
let result = '';
while (i <= 10) {
    result += i.toString();
    i += 1;
}
console.log(result);

// Zadanie 9
const numbers = [1, 3, 7, -1, 14, 2, 6, 0, 9];
let max = numbers[0];
let min = numbers[0];

for (number of numbers) {
    if (max < number) {
        max = number;
    }
    if (min > number) {
        min = number;
    }
}
console.log('Największa liczba', max);
console.log('Największa liczba', Math.max(...numbers));

console.log('Najmniejsza liczba', min);
console.log('Najmniejsza liczba', Math.min(...numbers));