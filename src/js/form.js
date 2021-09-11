/* Formulär */
'use strict';
// Variabler
const list = document.querySelector('ul');
const fruit = document.getElementById('fruit');
const addBtn = document.getElementById('add-fruit');
const deleteBtn = document.getElementById('delete-fruit');
const fruitArr = document.querySelectorAll('li');
addBtn.addEventListener('click', addFruit);
deleteBtn.addEventListener('click', deleteFruit);
// Lägger till frukter i listan
function addFruit() {
    if (fruit.value) {
        const li = document.createElement('li');
        li.innerHTML = fruit.value;
        list.appendChild(li);
    } else {
        alert('Skriv en frukt.');
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
        alert('Skriv en frukt.');
    }
}