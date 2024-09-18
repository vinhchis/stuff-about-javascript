const txtMessage = document.querySelector("#txtMessage");

const onkeydownButton = document.querySelector("#onkeydownButton");

onkeydownButton.addEventListener("onkeydown", numericOnly(this));
/*
    keyCode(48) => '0'
    keyCode(57) => '9'
    returnValue - indicates whether the default action for this event has been prevented or not. 
*/
function numericOnly(event) {
    console.log("run");
    if (!event.keyCode >= 48 && event.keyCode <= 57) 
        event.preventDefault();
}

//  function countWords()  {
//     var message = document.getElementByID('txtMessage').value;
//     message = message.replace(/\s+/g, ' ');
//     var numberOfWords = message.split(' ').length;
//     document.getElementById('txtTrack').value = words Remaining:  ' + eval(50 - numberOfWords);

//     if(numberOfWords > 50)
//         alert("too many words.");
// }
