'use strict';

const clickBtn = document.getElementById('click-btn');
const windowBtn = document.getElementById('windowMethodsBtn');
const htmlContent = document.getElementById('html-content');
const output = document.getElementById('output');
const currentYear = document.getElementById('currentYear')
const myString = "{a variable}";
const anotherString = "Double quotes work too";

const templateString = `Template literals can include ${myString}`;

const myNumber = 14;
const myDecimal = 3.14159;

const isItFriday = true;
const javaScriptIsBoring = false;

let yourName;

//clickBtn.onclick = () => alert(`Hi, ${yourName}!`);
clickBtn.addEventListener('click', () => {alert('CLICK!!')})



htmlContent.textContent = "This is the <p> element";
output.textContent = templateString

//yourName = prompt(`What is your name?`, `Enter your name...`);
//alert(`Hello, ${yourName}!`)
// confirm(`Say bye?`)

//Display current year in footer
//innerText presents as 'human-readable'
currentYear.innerText = new Date().getFullYear();

