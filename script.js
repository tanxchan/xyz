const coords = {x:0, y:0}
const u = document.getElementsByClassName("underlay")[0];
//var c = document.createElement("div");
function fadeOutAndRemove(element){
    //element.classList.toggle('fade-out')
}
function a(e){//i love chat
    coords.x = e.clientX;
    coords.y = e.clientY;
    let c = document.createElement("div")
    c.setAttribute("class", "cursor-circle")
    c.style.left= coords.x-12+'px'
    c.style.top= coords.y-12+'px'
    document.body.insertBefore(c, u)
    console.log('created', c);
    setTimeout(() => {
        c.classList.add('fade-out');
    }, 10);
    c.addEventListener('transitionend', function(){
        console.log("hello");
        c.parentNode.removeChild(c);
    })

}
window.addEventListener("mousemove", a)