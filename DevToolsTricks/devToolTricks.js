const dogs = [{ name: 'Snickers', age: 2}, { name: 'Hugo', age: 8}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular

console.log("hello");

// Interpolated

console.log('Hello I am a %s string!', '\uD83D\uDE00')

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow:10px 10px 0 blue')

// Warning!
console.warn('Oh Noo');

// Error :/
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})

// Counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');


// Timing
console.time('fetching data');
fetch('http://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
});

// Table
console.table(dogs);




