let nameArr = [];

nameArr[0] = prompt('What is your first name?');
nameArr[1] = prompt('What is your last name?');

// Function declaration
function errorCheck(name){
    if(!name[0] || !name[1]){
        name[0] = prompt("Nah, for real. What's your first name?");
        name[1] = prompt('What da heck is your last name?');

        // Recursion- function calls itself again
        name = errorCheck(name);
    }

    return name;
}

// Function expression
// let errorCheck = function() {}

nameArr = errorCheck(nameArr);


document.querySelector('#greeting').innerHTML = `<p> Hello, ${nameArr[0]} ${nameArr[1]} ! </p>`;

