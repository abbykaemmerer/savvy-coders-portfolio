let name = prompt('What is your name?');


// Function declaration
function errorCheck(someName){
    if(!someName){
        someName = prompt('Como te llamas?');

        // Recursion- function calls itself again
        someName = errorCheck(someName);
    }

    return someName;
}

// Function expression
// let errorCheck = function() {}

name = errorCheck(name);


document.querySelector('#greeting').innerHTML = `<p> Hello ${name}! </p>`;

