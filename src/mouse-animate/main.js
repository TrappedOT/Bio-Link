function clickEffect(e) {
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d);
    }.bind(this));
}


document.addEventListener('click', clickEffect);

function enterSite() {
    document.getElementById("enter").style.display = "none";
    if (!started) {
        var audio = new Audio('https://cdn.discordapp.com/attachments/1174263540706721822/1200654707404836864/Juice_WRLD_-_Saw_Your_Face_AMV_Prod_by._Young_Feno.mp3');
        audio.volume = 0.02;
        audio.play();
        started = true;
    }
}