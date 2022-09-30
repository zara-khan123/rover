canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverwidth=100;
roverheight=90;
rover_x=10;
rover_y=10;
images=["mars 0.jpg", "mars 1.jpg", "mars 2.jfif", "mars 3.jpg, mars 4.jpg"];
numbers= Math.floor(Math.random()*5);


bg=images[numbers];
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
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
if(keyPressed == '87')
{
   up();
}
if(keyPressed == '83')
{
down();
}
if(keyPressed == '65')
{
   left();
}
if(keyPressed =='68')
{
    right();
}

}

function up()
{
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        uploadBackground();
        uploadrover();

    }
}
function down()
{
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        uploadBackground();
        uploadrover();

    }
}

function left()
{
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        uploadBackground();
        uploadrover();

    }
}

function right()
{
    if(rover_x <= 700)
    {
        rover_x = rover_x + 10;
        uploadBackground();
        uploadrover();

    }
}