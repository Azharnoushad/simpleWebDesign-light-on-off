const ligthContainerEl=document.querySelector(".lamp-container")
const btnEl=document.querySelector(".onBtn")
const lightEl=document.querySelector(".light")
const spanEl=document.querySelector(".btnMove")



const onLight = (event) =>{


    if(!ligthContainerEl.classList.contains("active") && event.target.classList[0] === "btnMove"){
        ligthContainerEl.classList.add("active")
        lightEl.style.cssText=`animation : lightOn 2000ms ease forwards`;
        spanEl.style.cssText=`animation: spanMove 1000ms forwards ease-in;`
    }else{
        ligthContainerEl.classList.remove("active")
        lightEl.style.animation = null;
        lightEl.style.cssText=`animation : lightOff 2000ms ease forwards`;
        spanEl.style.cssText=`animation: spanBack 1000ms forwards ease-in;`
    }
}




btnEl.addEventListener("click",onLight)