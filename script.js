let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function() {
        MainImg.src = smallimg[i].src;
    }
}
gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#fea-products h2", {
        scrollTrigger: {
            trigger: "#fea-heading h2",
            scroller: "body",
            markers: true,
            
        },
        y: 30,
        scale:1.2,
        duration: 2,
    });
});
gsap.from("#fea-products h2", {
    scrollTrigger: {
        trigger: "#fea-heading h2",
        scroller: "body",
        markers: true,
        
    },
    y: 30,
    scale:1.2,
    duration: 2,
});

var tl=gsap.timeline();
tl
/* .from("#header",{
    opacity:0,
    duration:1,
    y:20,
}) */
.from("#hero h4",{
    opacity:0,
    duration:1,
    scale:1.3,
    x:20,
})
.from("#hero h2",{
    opacity:0,
    duration:1,
    scale:1.3,
    x:20,
})
.from("#hero h1",{
    opacity:0,
    duration:1,
    scale:1.3,
    x:20,
})
.from("#hero p",{
    opacity:0,
    duration:1,
    scale:1.3,
    x:20,
})
.from("#hero button",{
    opacity:0,
    duration:1,
    scale:1.3,
    y:-20,
})
