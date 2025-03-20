/**
 * JavaScript for the Solvent Inks page
 */

// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
    var tabContents = document.getElementsByClassName("containerTab");

    // Hide all tab containers
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Show the selected tab container
    document.getElementById(tabName).style.display = "block";
}

// Add event listener for close buttons
document.addEventListener('DOMContentLoaded', function () {
    var closeButtons = document.getElementsByClassName('closebtn');
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', function () {
            this.parentElement.style.display = 'none';
        });
    }
}); 