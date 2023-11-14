const wrapper = document.querySelector(".wrapper")
const slider = document.querySelector(".slider")
const elementoSroll = slider.querySelectorAll("div")[0]
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")


    next.addEventListener("click", () => {
        slider.scrollLeft += 600
        prev.classList.remove("hidden")
    })
    
    prev.addEventListener("click", () => {
        slider.scrollLeft -= 600
        checkIconLeft()    
                    
    })
      
          
function checkIconLeft(){
    let scrollwidht = wrapper.scrollWidth - wrapper.clientWidth
    if(scrollwidht === wrapper.scrollLeft){
       prev.classList.add("hidden")   
    }else{
        prev.classList.remove("hidden")
    } 
}