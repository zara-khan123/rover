canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverwidth=100;
roverheight=90;
rover_x=10;
rover_y=10;

bg="mars.jpg";
console.log(bg);
rover="rover.png";
console.log(rover);
function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = bg; 

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover; 

}

function uploadBackground()
{
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadrover()
{
ctx.drawImage(rover_imgTag, rover_x, rover_y, roverwidth, roverheight);
}

uploadrover();
uploadBackground();