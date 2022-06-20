open_pic=""
function preload(){
img1 = loadImage("Webp.net-gifmaker.gif");
}
function setup(){
canvas=createCanvas(450,450);
canvas.parent("mama");
}

function draw(){
    if(open_pic=="true"){
    image(img1,0,0,450,450);
}
}

function imageopen(){
   open_pic="true";
document.getElementById("leftimg").src="for-you-love-you.gif";
document.getElementById("rightimg").src="elephant.gif";
}