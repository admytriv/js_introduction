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

// Zadanie 10
function iloczyn(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return false;
    }
    return num1 * num2;
}
console.log(iloczyn(2, 3));
console.log(iloczyn(1, 's'));

// Zadanie 11
function splitter(text, delimiter) {
    const words = text.split(delimiter);
    words.forEach((word, index) => {
        words[index] = word[0].toUpperCase() + word.slice(1);
    });
    return words.join(delimiter);
}

console.log(splitter('ala ma kota', ' '));

// Zadanie 12
(function (name, age) {
    console.log(`Nazywam się ${name}. Mój wiek to - ${age}`);
})('Andrii', 24)

// Zadanie 13
function sum() {
    let sum = 0;
    for (const argument of arguments) {
        if (typeof argument !== 'number') {
            continue;
        }
        sum += argument;
    }
    return sum;
}

console.log(sum(1, 3, 5, 7, 9));

// Zadanie 14
function fizzbuz(toNumber) {
    let counter = 1;

    while (counter < toNumber) {
        if (counter % 3 === 0 && counter % 5 === 0) {
            console.log('fizzbuz', counter);
        } else if (counter % 3 === 0) {
            console.log('fizz', counter);
        } else if (counter % 5 === 0) {
            console.log('buz', counter);
        }
        counter += 1;
    }
}

fizzbuz(100);

// Zadanie 15
console.log(Object.getOwnPropertyNames(Math));
console.log(Object.getOwnPropertyNames(console));

// Zadanie 16
const product = {
    name: 'Product',
    price: 80,
};
const copy = Object.assign({}, product);
// Lub const copy = JSON.parse(JSON.stringify(product));
copy.name = 'Copy';
copy['price'] = 21;
console.log(product, copy);

// Zadanie 17
const user = {
    name: 'Andrii',
    lastName: 'Dmytriv',
    age: 24,
    city: 'Warsaw',
    sayHello: function () {
        return `Imię: ${this.name}. Nazwisko: ${this.lastName}. Wiek: ${this.age}. Miasto: .${this.city}`;
    }
};
console.log(user.sayHello());

// Zadanie 18
const names = [
    'Olivia', 'Oliver', 'Amelia', 'George', 'Isla', 'Harry', 'Ava', 'Noah',
    'Emily', 'Jack', 'Sophia', 'Charlie', 'Grace', 'Leo', 'Mia', 'Jacob',
    'Poppy', 'Freddie', 'Ella', 'Alfie',
];
console.log(names.sort());

// Zadanie 19
function sortByLength(a, b) {
    if (a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    }
    return 0;
}
console.log(names.sort(sortByLength));

// Zadanie 20
const productNumbers = [1, 2, 3, 4, 5, 6];
console.log(productNumbers.reduce((product, number) => {
    return product * number;
}));

// Zadanie 21
const months = [, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getMoth(number) {
    return months[number];
}
console.log(getMoth(3));

// Zadanie 22
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function getVowels(text) {
    const vowelsInText = Array.from(text).filter((letter) => vowels.includes(letter));
    return {
        vowels: vowelsInText,
        count: vowelsInText.length,
    };
}
console.log(getVowels(lorem));

// Zadanie 23
const book = {
    users: [],
    addUser: function (user) {
        this.users.push(user);
        return this.users;
    },
    showUsers: function () {
        console.log(this.users);
        return this.users;
    },
    hasUser: function (user) {
        return this.users.indexOf(user) !== 0 ? false : true;
    },
    getCount: function () {
        console.log(this.users.length);
        return this.users.length;
    },
    resetUsers: function () {
        this.users.length = 0;
        return this.users;
    }
};

book.addUser('Andrii');
book.showUsers();
book.hasUser('Andrii');
book.getCount();
book.resetUsers();
book.showUsers();

// Zadanie 24
function isPalindrome(text) {
    const reversedText = text.split('').reverse().join('');
    return reversedText.toLowerCase() === text.toLowerCase();
}

console.log(isPalindrome('Text'));
console.log(isPalindrome('Civic'));