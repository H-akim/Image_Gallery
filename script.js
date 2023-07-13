var close = document.getElementById("close").addEventListener("click", ()=>{
    fullImgBox.style.display = 'none';
});

var fullImgBox = document.getElementById("full_Img_box");
var fullImg = document.getElementById("fullImg");

function openFull(pic){ 
    fullImgBox.style.display = 'flex';
    fullImg.src = pic;
}
