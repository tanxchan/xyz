const coords = {x:0, y:0}
let c = document.createElement("div")
c.setAttribute("class", "cursor-circle")
setTimeout(()=>{
    let t = document.getElementById('top-of-page')
    t.appendChild(c);},10)
function a(e){//i love chat
    coords.x = e.clientX;
    coords.y = e.clientY;
    c.style.left= coords.x+'px';
    c.style.top= coords.y+'px';
    console.log(c);
}
window.addEventListener("mousemove", a)//make a little circle to follow the cursor around :o
