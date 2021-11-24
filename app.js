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


  const hamm=document.querySelector(".ham");
  hamm.addEventListener('click',function(){
    document.querySelector(".gallery2").classList.toggle("change");
    document.querySelector(".main").classList.toggle("all");
  })
  
