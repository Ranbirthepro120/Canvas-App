canvas = document.getElementById("Canvas");
color = "cyan";
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200, 200, 45, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", Mouse);

function Mouse(e)
{
    
   c0l0r = document.getElementById("c").value;
   mouse_x = e.clientX - canvas.offsetLeft;
   mouse_y = e.clientY - canvas.offsetTop;

   console.log("X = " + mouse_x + ",Y = " + mouse_y);
   circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y)
{
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = 3;
   ctx.arc(mouse_x, mouse_y, 45, 0, 2*Math.PI);
   ctx.stroke();

}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}