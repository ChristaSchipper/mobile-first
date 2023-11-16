


function gfgMenu() { 
    const GFG = document.querySelector('.links'); 
    if (GFG.classList.contains('d-none')) { 
        GFG.classList.remove('d-none'); 
    } 
    else { 
        GFG.classList.add('d-none'); 
    } 
} 




var toggleContainer = document.querySelector('.togglecontainer');
var gridRow4 = document.querySelector('.plante4'); // Adjust this selector based on your structure

function adjustMarginTop() {
    // Get the height of the expanded togglecontainer
    var toggleContainerHeight = toggleContainer.clientHeight;

    // Set the height of grid-row 4 based on the expanded togglecontainer
    gridRow3.style.height = toggleContainer.classList.contains('visible') ? toggleContainerHeight + 'px' : 'auto';

    // Add or remove margin-top based on the visibility of the togglecontainer
    var marginTopValue = toggleContainer.classList.contains('visible') ? '1vh' : '0';
    toggleContainer.style.marginTop = marginTopValue;
}

toggleContainer.addEventListener('transitionend', adjustMarginTop);

document.getElementById('toggleButton').addEventListener('click', function () {
    toggleContainer.classList.toggle('visible');
    event.preventDefault();

    adjustMarginTop(); // Call the function to handle the margin-top adjustment
});
