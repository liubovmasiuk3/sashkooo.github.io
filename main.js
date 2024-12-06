// Function to change the content of the <p> element when the button is clicked
function changeContent() {
    // Select the first <p> element and update its text content
    const paragraph = document.querySelector('p');
    paragraph.textContent = "You clicked the button!";
}

// Get the first <button> element and add an event listener for the "click" event
const button = document.querySelector('button');
button.addEventListener('click', changeContent);