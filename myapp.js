let elements = document.getElementsByName("cssProperty"); // get the select boxes

let div = document.getElementById("modify"); // get the div we want to modify

// the main function 

function set() {

    for (let i = 0; i < elements.length; i++) {

        let cssProperty = elements[i].getAttribute("id"); // get the property name from the id

        let cssValue = elements[i].value; // get the value from the value attribute

        div.style[cssProperty] = cssValue; // assign a certain value to the property

    }

}

let button = document.getElementById("set"); //get the button element

button.addEventListener("click", set); // adding the event

