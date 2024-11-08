let button = document.querySelector(".alertButton button");

button.addEventListener("click", function() {
    alert("Hello, world!");
});

const buttons = document.querySelectorAll('.changeColor');
buttons.forEach(button => {
    button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const colors = ['pink', 'aqua', 'blue', 'yellow', 'coral'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}




document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;   

    let age = document.getElementById("age").value;   

    alert(`Hello ${name}, Are you ${age} years old?`);
});