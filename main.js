canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = document.getElementById("color").value;
radius = document.getElementById("radius").value;
ctx.lineWidth = document.getElementById("width_of_line").value;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.arc( 200,200,radius,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
console.log(color);
mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;
radius = document.getElementById("radius").value;
console.log("X = " + mouse_x + " ,Y = " + mouse_y);
console.log("Radius is " + radius);
circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = document.getElementById("width_of_line").value;
    ctx.arc( mouse_x,mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
}
function clear_area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}