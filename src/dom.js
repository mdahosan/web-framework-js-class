console.log('Understanding DOM');

console.log(document);

// let h1Tag = document.getElementsByTagName('h1');
// let blueText = document.getElementsByClassName('text-blue');
// let para = document.getElementById('para');
// console.log(h1Tag);

let blueText = document.querySelector('.text-blue');

let blueTextStyles = {
    color: 'blue',
    background: 'red',
    fontSize: '23px',
};

// blueText.style.color = 'blue';
// blueText.style.background = 'red';
// blueText.style.fontSize = '23px';

let para = document.querySelector('#para');

let button = document.createElement('button');
button.innerHTML = 'Change Style';
para.appendChild(button);

function styleChange() {
    Object.assign(blueText.style, blueTextStyles);
}

button.addEventListener('click', styleChange);

// console.log(window);


