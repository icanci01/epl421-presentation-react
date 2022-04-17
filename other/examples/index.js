function validateForm () {
    var val_name = document.getElementById("name");
    var val_email = document.getElementById("email");
    if (val_name.value == ""){
       // change the style of the input boxes to red
       val_name.style.backgroundColor = "red";
       val_email.style.backgroundColor = "red";
       // change the text of the paragraph
       changeParagraph();
    }
}

function changeParagraph() {
    var para = document.getElementById("para");
    para.innerHTML = "WRONG!!!!";
    para.style.color = "red";
}