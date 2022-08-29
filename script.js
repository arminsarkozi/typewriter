const queryString = window.location.search;
const urlParameters = new URLSearchParams(queryString);
const speed = (urlParameters.has('speed')) ? urlParameters.get('speed') : 95;

let i = 0;

if (urlParameters.has('title')) {
    document.getElementById("title").innerHTML = "";
    let setTo = urlParameters.get('title');
    writing("title", setTo);
}

if (urlParameters.has('description')) {
    document.getElementById("description").innerHTML = "";
}


function writing(elementID, text) {
    if (i <= text.length) {
        document.getElementById(elementID).innerHTML = text.substring(0, i+1);
        i++;
        setTimeout(writing, speed, elementID, text);
    } else {
        i = 0;
    }
    if (elementID != 'description') setDescription();
}

function setDescription() {
    if (i == 0) {
        let setTo = urlParameters.get('description');
        writing("description", setTo);
    }
}