var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function closeFullImg(){
    fullImgBox.style.display = "none";
    
}

function openFullImg(pic){

    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}
