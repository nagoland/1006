const slideWrapper = document.getElementById("wrapper")
const slideItems = document.getElementsByClassName("slide-item")
let activeNum = 0
slideItems[0].classList.add('active',"zoom")

// 保守性を意識する
const MaxSlideNum = slideItems.length - 1
const intervalTime = 5000
const fadeOutTime = 3000

// 1病後に関数が動く
// setTimeout(function(){
//     slideItems[0].classList.remove('active')
// },1000)

setInterval(function(){
    // if (activeNum !== 2) {
    //     slideItems[activeNum].classList.remove('active')
    //     activeNum++
    //     slideItems[activeNum].classList.add('active')
    // }
    // else {
    //     slideItems[activeNum].classList.remove('active')
    //     activeNum = 0
    //     slideItems[activeNum].classList.add('active')
    // }
    slideItems[activeNum].classList.remove('active')
    setTimeout(function(){
        slideItems[activeNum].classList.remove('zoom')
    },fadeOutTime)
    activeNum = activeNum == MaxSlideNum?0:activeNum+1
    slideItems[activeNum].classList.add('active', 'zoom')
   
}, intervalTime)