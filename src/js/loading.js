$(document).ready(function() {
    $('#loading-screen').css({
        'opacity': '0'
    });
    
    setTimeout(() => {
        $('#loading-screen').hide();
    }, 1000);
});

started = false

function enterSite() {
    document.getElementById("enter").style.display = "none";
    if (!started) {
        var audio = new Audio('https://cdn.discordapp.com/attachments/1174263540706721822/1200654707404836864/Juice_WRLD_-_Saw_Your_Face_AMV_Prod_by._Young_Feno.mp3');
        audio.volume = 0.5;
        audio.play();
        started = true;
    }
}
