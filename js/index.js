let toggleThankYou = function() {
    document.getElementById("thank_you_message").innerHTML = "Thank You! I will get back to you ASAP!";

    let text_inputs = document.getElementsByClassName("text_inputs");
    for (let i = 0; i < text_inputs.length; i++) {
        text_inputs[i].value = "";
    }    
}