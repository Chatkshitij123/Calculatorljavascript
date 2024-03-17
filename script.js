let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log("Button clicked:", e.target.textContent); // Log the clicked button's text content
        let buttonText = e.target.textContent;

        if (buttonText === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = ""; // Clear the string on error
            }
        } else if (buttonText === "AC") {
            string = "";
            input.value = string;
        } else if (buttonText === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
