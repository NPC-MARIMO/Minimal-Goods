gsap.registerPlugin(ScrollTrigger);
gsap.to("#page1>h1" , {
    scale : 0,
    x : -3,
    duration : 2,
    y : -50,
    letterSpacing : 0,
    scrollTrigger: {
        trigger : "#page1>h1",
        start : "top 64%",
        scrub : 1
    }
})
gsap.to("#center" , {
    opacity : 1,
    scale : 1,
    scrollTrigger :{
        trigger : "#page2",
        start : "top 45%" ,
        scrub : 1 ,
        end : "top 20%"
    }
})
ScrollTrigger.create({
    trigger : "#nav",
    pin : true,
    scrub : 1,
    start : "3%  top",
    end : "btottom -5000%"
})
ScrollTrigger.create({
    trigger : "#line",
    pin : true,
    end : "btottom -5000%",
    start : "top 13% "
})

let page2h1 = document.querySelectorAll(".page2h1");
page2h1.forEach((val)=>{
    gsap.to(val , {
       
        scrollTrigger : {
            trigger : val ,
            start : "30% 12%",
            scrub : 1
        },
        y : 150,
        opacity : 0
        
    })
})
gsap.to("#image2" ,{
    scale : 1,
    borderRadius : 0,
    ease : Expo.easeInout,
    duration : 1,
    scrollTrigger :{
        trigger : "#image2",
        start : "center 50%",
        scrub : 1 ,
        pin : true ,
        end : "bottom 30%  ",
    }
})
gsap.to("#nav" ,{
    backgroundColor : "#E8E2DA",
    color: "#2E2A27",
    ease : Expo.easeInout,
    duration : 1,
    scrollTrigger :{
        trigger : "#image2",
        start : "center 40%",
        scrub : 1 ,
        end : "bottom 30%  ",
    }
})

gsap.to("#page3" ,{
    backgroundColor : "#E8E2DA",
    ease : Expo.easeInout,
    duration : 1,
    scrollTrigger :{
        trigger : "#image2",
        start : "center 40%",
        scrub : 1 ,
        end : "bottom 30%  ",
    }
})
gsap.to("#page5txt" ,{
    scrollTrigger: {
        trigger : "#page5txt" ,
        markers : true ,
        pin : true,
        start : "80% 90%",
        end : "bottom -1000%",
        pinSpacing : false
    }
})
let txt =gsap.utils.toArray("#txt");
txt.forEach((tect)=>{
    ScrollTrigger.create({
        trigger : "#image55",
        start : "top bottom",
        onEnter : ()=> change12(tect),
        onLeave : ()=> change21(tect),
        scrub : 1
    })
})
let change12 = (tect)=>{
    tect.textContent = `Decor`;
}
let change21 = (tect)=>{
    tect.textContent = `Furniture`;
} 