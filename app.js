

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




  function getCurrentRotation(el){
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "none";
    if (tm != "none") {
      var values = tm.split('(')[1].split(')')[0].split(',');
      /*
      a = values[0];
      b = values[1];
      angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
      */
      //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
      var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
    return 0;
  }

  const hamm=document.querySelector(".hamb");
  hamm.addEventListener('click',function(){
    document.querySelector(".main").classList.toggle("all");
    document.querySelector(".first").classList.toggle("f");
    document.querySelector(".second").classList.toggle("s");
    document.querySelector(".third").classList.toggle("t");
    document.querySelector(".gallery1").classList.toggle("g1");
    document.querySelector(".content").classList.toggle("cot");
    
    document.querySelector("body").classList.toggle("mainbody");
    var r=getCurrentRotation(document.querySelector(".first"));
    if(r===45){
    setTimeout(function(){
      document.querySelector(".gallery2").classList.toggle("change");
    },350);
  }
  else{
    document.querySelector(".gallery2").classList.toggle("change");

  }
  for(var i=0; i<=4; i++){
  document.querySelectorAll(".trans")[i].classList.toggle("transform");
  }
  })

  // document.querySelector("p").addEventListener("click", function(){
  //   window.location.hash="gaa";
  // })

// var windowHeight = window.innerHeight;

document.querySelector("#enter").addEventListener("click",function(){
  document.querySelector(".front").style.display="none";
  document.documentElement.requestFullscreen();
})






document.querySelectorAll(".fill")[0].addEventListener("click",function(){
  document.querySelectorAll(".fill")[0].style.display="none";
  document.querySelectorAll(".line")[0].style.display="block";
})
document.querySelectorAll(".fill")[1].addEventListener("click",function(){
  document.querySelectorAll(".fill")[1].style.display="none";
  document.querySelectorAll(".line")[1].style.display="block";
})
document.querySelectorAll(".fill")[2].addEventListener("click",function(){
  document.querySelectorAll(".fill")[2].style.display="none";
  document.querySelectorAll(".line")[2].style.display="block";
})
document.querySelectorAll(".fill")[3].addEventListener("click",function(){
  document.querySelectorAll(".fill")[3].style.display="none";
  document.querySelectorAll(".line")[3].style.display="block";
})
document.querySelectorAll(".fill")[4].addEventListener("click",function(){
  document.querySelectorAll(".fill")[4].style.display="none";
  document.querySelectorAll(".line")[4].style.display="block";
})
document.querySelectorAll(".fill")[5].addEventListener("click",function(){
  document.querySelectorAll(".fill")[5].style.display="none";
  document.querySelectorAll(".line")[5].style.display="block";
})





document.querySelectorAll(".line")[0].addEventListener("click",function(){
  document.querySelectorAll(".line")[0].style.display="none";
  document.querySelectorAll(".fill")[0].style.display="block";
})
document.querySelectorAll(".line")[1].addEventListener("click",function(){
  document.querySelectorAll(".line")[1].style.display="none";
  document.querySelectorAll(".fill")[1].style.display="block";
})
document.querySelectorAll(".line")[2].addEventListener("click",function(){
  document.querySelectorAll(".line")[2].style.display="none";
  document.querySelectorAll(".fill")[2].style.display="block";
})
document.querySelectorAll(".line")[3].addEventListener("click",function(){
  document.querySelectorAll(".line")[3].style.display="none";
  document.querySelectorAll(".fill")[3].style.display="block";
})
document.querySelectorAll(".line")[4].addEventListener("click",function(){
  document.querySelectorAll(".line")[4].style.display="none";
  document.querySelectorAll(".fill")[4].style.display="block";
})
document.querySelectorAll(".line")[5].addEventListener("click",function(){
  document.querySelectorAll(".line")[5].style.display="none";
  document.querySelectorAll(".fill")[5].style.display="block";
})






