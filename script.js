let tl=gsap.timeline({
    repeat: -1
});

tl.to("img",{
    ease: "steps.inOut",
    width: "100%",
    stagger: 2,
},"a")
.to("#text h1",{
    ease: "steps.inOut",
    top: 0,
    stagger: 2
},"a")
.to("#text h1",{
    delay: 2,
    ease: "steps.inOut",
    top: -100,
    stagger: 2
},"a")