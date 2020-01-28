let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/img-2.jpg') {
        myImage.setAttribute('src','images/img-3.jpeg');
    } else {
        myImage.setAttribute ('src','images/img-2.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    //prompt() function prompts a dialog box asking for user input
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        //Allows us to store data in the browser and later retrieve it
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName + '!';    
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName + '!';
}

myButton.onclick = function(){
    setUserName();
}