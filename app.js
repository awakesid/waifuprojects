let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".text", 10, { y: 800 })

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "285%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);