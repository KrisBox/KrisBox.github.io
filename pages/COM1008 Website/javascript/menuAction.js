/**
 * Script to add the 'open' class to the mobile nav when using a smaller screen
 */

function toggleClass(){
    var ulElement = document.getElementById('menu');
    if(!(ulElement.classList.contains('open'))) {
        ulElement.classList.add('open');
    }
    else {
        ulElement.classList.remove('open');
    }
}

var button = document.getElementById('toggleMenu');
button.addEventListener('click', toggleClass, false);