// -------------sự kiện cho chọn địa điểm nhận hàng------------
const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')
adressbtn.addEventListener('click',function(){
    document.querySelector('.adress-form').style.display = 'flex'
})
adressclose.addEventListener('click',function(){
    document.querySelector('.adress-form').style.display = 'none'
})

// ----------------Chuyển tiếp slide---------------------------
const rightbtn = document.querySelector('.fa-angle-right')
const leftbtn = document.querySelector('.fa-angle-left')
const imgNuber = document.querySelectorAll(".slider-container-left-top img")
let index = 0
// console.log(rightbtn)
rightbtn.addEventListener("click", function(){
    index = index + 1
    if(index>imgNuber.length-1){
         index = 0
    }
    
    document.querySelector(".slider-container-left-top").style.right = index * 100 +"%"
    image.classList.add("active")
})
leftbtn.addEventListener("click", function(){
    index = index - 1
    if(index<0){
         index = imgNuber.length - 1
    }
    document.querySelector(".slider-container-left-top").style.right = index * 100 +"%"
})

/* -----------slide 1-------------------------- */
const imgNuberLi = document.querySelectorAll(".slider-container-left-bottom li")
imgNuberLi.forEach(function(image, index){
    image.addEventListener("click", function(){
        removeActive()
        document.querySelector(".slider-container-left-top").style.right = index * 100 +"%"
        image.classList.add("active")
    })
})
function removeActive(){
    let imgactive = document.querySelector(".active")
    imgactive.classList.remove("active")
}

/* -----------slide 2 Chạy silde tự động-------------------------- */
function imgAuto(){
    index = index + 1
    if(index>imgNuber.length-1){
        index = 0
   }
   removeActive()
   document.querySelector(".slider-container-left-top").style.right = index * 100 +"%"
   imgNuberLi[index].classList.add("active")
}
setInterval(imgAuto,5000)


// -------------------Slider product-----------------------------------------
const rightbtntwo = document.querySelector('.fa-angle-right-two')
const leftbtntwo = document.querySelector('.fa-angle-left-two')
const imgNubertwo = document.querySelectorAll(".slider-product-one-content-items")
// console.log(rightbtntwo)
// console.log(leftbtntwo)
rightbtntwo.addEventListener("click", function(){
    index = index + 1
    if(index>imgNubertwo.length-1){
         index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 +"%"
})
leftbtntwo.addEventListener("click", function(){
    index = index - 1
    if(index<0){
         index = imgNubertwo.length - 1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 +"%"
})