/* Formulär */
'use strict';
// Variabler
const contactInputs = document.getElementsByClassName('contact-form-inputs');
const submitBtn = document.getElementById('send-btn');
submitBtn.addEventListener('click', checkForm);
const error = document.getElementsByClassName('error');
const confirm = document.getElementById('confirm');
const list = document.getElementById('fruit-list');
const fruit = document.getElementById('fruit');
const addBtn = document.getElementById('add-fruit');
const deleteBtn = document.getElementById('delete-fruit');
const fruitArr = document.getElementsByClassName('fruit');
addBtn.addEventListener('click', addFruit);
deleteBtn.addEventListener('click', deleteFruit);
// Lägger till frukter i listan
function addFruit() {
    if (fruit.value) {
        const li = document.createElement('li');
        li.innerHTML = fruit.value;
        li.className = 'fruit';
        list.appendChild(li);
    } else {
        error[3].innerHTML = 'Skriv en frukt.';
    }
}
// Tar bort frukter ur listan
function deleteFruit() {
    if (fruit.value) {
        for (let i = 0; i < fruitArr.length; i++) {
            if (fruitArr[i].innerHTML.indexOf(fruit.value) !== -1) {
                list.removeChild(fruitArr[i]);
                fruitArr.sort();
            } else {
                continue;
            }
        }
    } else {
        error[3].innerHTML = 'Skriv en frukt';
    }
}
let bar = 0;
// Validerar kontaktformuläret
function checkForm() {
    for (let i = 0; i < contactInputs.length; i++) {
        if (!contactInputs[i].value) {
            error[i].innerHTML = 'Fältet är obligatoriskt.';
        } else {
            error[i].innerHTML = '';
            bar++;
            confirm.innerHTML = '';
        }
    }

    if (bar == 3) {
        confirm.innerHTML = 'Meddelandet har skickats.';
    }
}