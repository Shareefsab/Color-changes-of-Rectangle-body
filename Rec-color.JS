//First step mouseover a in rectangle//

const rect = document.querySelector('#Center');

rect.addEventListener("mousemove", function (details) {
    const rectanglelocation = rect.getBoundingClientRect();
     console.log(rectanglelocation);

    const insiderectval = details.clientX - rectanglelocation.left;

    if (insiderectval < rectanglelocation.width/2) {
        const redcolor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    } else {
        const bluecolor = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0, 255, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave",function(){
gsap.to(rect,{
    backgroundColor:"Green",
})
});
