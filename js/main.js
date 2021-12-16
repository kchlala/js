// var hospital={
//     adi:"MedicalPlaza",
//     yeri:"28May",
//     email:"MedicalPlaza@gmail.com",
//     filiallar:
//     {
//         kuce:["Suleyman Rustam","Babek","Nasimi"],
//         elaqe:["0123","4567","9087"],
         
//     shobeler:
//         {
//             shobeAdlari:["Kardiologiya","Fizioterapiya","Oftalmologiya","Stomatologiya","Urologiya"],
//             ishciler:{
//                 bashhekim:["Agayeva C.","Mammedov G.","Valiyev M."],
//                 hekim:["Aliyev T.","Quliyeva J."],
//                 tibbacilari:["Guler","Jale","Samira"]
//             }

//         }
//     } 
// }
// console.log(hospital.filiallar.shobeler.ishciler.hekim);

//  --------------------------- 

// var firstname="lala"
// var age=21
// var hobby="sleep"
// var email="lala55@gmail.com"
// console.log("Sizin adiniz:"+" "+firstname+"\n"+"sizin yasiniz:"+age)
      

// var btn1 = document.querySelector(".btn1")
// var btn2 = document.querySelector(".btn2")
// var btn3 = document.querySelector(".btn3")
// var p1 = document.querySelector(".p1")
// var p2 = document.querySelector(".p2")
// var p3 = document.querySelector(".p3")
// btn1.onclick=function(){
//     p1.style="display:block"
//     p2.style="display:none"
//     p3.style="display:none"   
// }
// btn2.onclick=function(){
//     p2.style="display:block"
//     p1.style="display:none"
//     p3.style="display:none"   
// }

// ------------------------------

//  var btn=document.querySelectorAll("#accordion button")
//  var p=document.querySelectorAll("#accordion p")
//  for (let i = 0; i < btn.length; i++) {
//      btn[i].onclick = function() {
//          for (let j = 0; j < p.length; j++) {
//             p[j].classList.remove("active")         
//          }
//        this.nextElementSibling.classList.add("active")
//      }
//  }


// ----------------


// var tabbtn=document.querySelectorAll(".buttons button")
// var tabp=document.querySelectorAll(".buttons p")
// for (let i = 0; i < tabbtn.length; i++) {
//     tabbtn[i].onclick=function() {
//         for (let j = 0; j < tabp.length; j++) {
//            tabp[j].classList.remove("active")  
//         }
//         var btni = this.getAttribute("data-btn")
//         tabp[btni - 1].classList.add("active")
//     }
// }

  //----------------------


// let mySlider= [
//     'photo/yarpaq.jpeg' ,
//     'photo/qush.jpeg' ,
//     'photo/deniz.jpeg' ,
//     'photo/kitab.jpeg' 
// ]

// let img =document.querySelector("#slider img")
// let next =document.querySelector(".next")
// let prev = document.querySelector(".prev")
// let currentSlide=0
// img.src=mySlider[0]
// next.onclick=function(){
//     currentSlide++;
//     if(currentSlide>=mySlider.length) {
//         currentSlide=0
//     }
//     img.src=mySlider[currentSlide]
// }

// prev.onclick=function(){
//     currentSlide--;
//     if(currentSlide==-1) {
//         currentSlide=mySlider.length-1
//     }
//     img.src=mySlider[currentSlide]
// }

//------------------------

// var slideWidth = document.querySelector(".slider") .clientWidth
// var slideLength=document.querySelectorAll(".slider li") .length
// var mySlideWidth=slideWidth * slideLength
// var slideUl=document.querySelector(".slider ul")
//  slideUl.style.width=mySlideWidth + "px"
//  var nextIc=document.querySelector(".next")
//  var prevIc=document.querySelector(".prev")
//  var c=0

//  nextIc.onclick=function() {
//      clearInterval(myInt)
//      myNextSlider()
//      setInterval(myNextSlider,5000)
//  }
//  prevIc.onclick=function() {
//     clearInterval(myInt)
//     myPrevSlider()
//     setInterval(myNextSlider,5000)
// }

//  function myNextSlider() {
//      c++;
//      if (c==slideLength) {
//          c=0    
//      }
//      slideUl.style.left = -(c*slideWidth) + "px"
//  }

//  function myPrevSlider() {
//      c--;
//      if(c==-1) {
//          c=slideLength-1
//      }
//      slideUl.style.left=-(c*slideWidth) + "px"
//  }
//  var myInt = setInterval(myNextSlider,1000) ;


// ------------------ 

// var closeChat = document.querySelector("#chat .close-chat")
// var miniChat = document.querySelector(".mini-chat")
// var chat = document.querySelector("#chat")
// var myInp = document.querySelector(".message-box")
// var main = document.querySelector("main")
// closeChat.onclick = function () {
//     chat.classList.remove("active")
// }
// miniChat.onclick = function () {
//     chat.classList.add("active")
// }
// keypress , keydown , keyup
// myInp.addEventListener("keyup", function (e) {
//     if (e.keyCode == 13) {
//         if (myInp.value.trim() != "") {
//             if (myInp.value[0].toUpperCase() == myInp.value[0]) {
//                 // console.log(myInp.value);
//                 var msDiv = document.createElement("div")
//                 msDiv.className = "message support"
//                 var ptag = document.createElement("p")
//                 ptag.innerText = myInp.value

//                 msDiv.appendChild(ptag)
//                 main.appendChild(msDiv)
//                 var pTime = document.createElement("p")
//                 pTime.className = "time"
//                 var dt = new Date()
//                 // console.log(dt);
//                 pTime.innerText = dt.getHours() + ":" + dt.getMinutes()
//                 msDiv.appendChild(pTime)
//                 myInp.value = " "
//             } else {
//                 var msDiv = document.createElement("div")
//                 msDiv.className = "message user"
//                 var ptag = document.createElement("p")
//                 ptag.innerText = myInp.value

//                 msDiv.appendChild(ptag)
//                 main.appendChild(msDiv)
//                 var pTime = document.createElement("p")
//                 pTime.className = "time"
//                 var dt = new Date()
//                 // console.log(dt);
//                 pTime.innerText = dt.getHours() + ":" + dt.getMinutes()
//                 msDiv.appendChild(pTime)
//                 myInp.value = " "
//             }
//             main.scrollTop = main.scrollHeight
//         }


//     }
// })


// ---------------------- 






