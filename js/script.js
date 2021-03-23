
var modal = document.getElementById('my-modal');
var img = document.getElementsByClassName('ph');
var modalImg = document.getElementById('img1');

for(var i = 0; i < img.length; i++){
    img[i].onclick = function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        
    }
    var span = document.getElementsByClassName('close')[i];
    span.onclick = function () {
        modal.style.display = "none";
    }
}