function changebackgroundColor() {
    document.body.style.backgroundColor= "#ecf842d7";
}

function changeTextcolor() {
    document.body.style.color= "blue";
}

function changefontSize() {
    document.body.style.fontSize = "30px";
}

function toggleImage() {
    let img = document.getElementById("image");

    if (img.style.display === "none") {
        img.style.display = "block";
    }
    else {
        img.style.display = "none";
    }
}

function resetstyle() {

    document.body.style.backgroundColor= "rgb(235, 198, 198)";

    document.body.style.color= "rgb(20, 20, 20)";

    document.body.style.fontSize = "20px";

    document.getElementById("image").style.display = "block";
}
