/* Bildspel */
'use strict';
/* Variabler */
const images = document.getElementsByClassName('slideshow');
let count = 0;
/* Bildspel */
function slideshow() {

    if (!count) {
        images[count].style.display = 'block';
    } else if (count < images.length) {
        images[count].style.display = 'block';
        images[count - 1].style.display = 'none';
    } else if (count == images.length) {
        images[count - 1].style.display = 'none';
        count = 0;
        images[count].style.display = 'block';
    }
    count++;
}
/* Byt bild var tredje sekund */
setInterval(slideshow, 3000);