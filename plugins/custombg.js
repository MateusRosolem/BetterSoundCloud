// Dont do anything if you dont know anything ;)

let appcontainer = document.querySelector("#app")
let contentcontainer = document.querySelector("#app .l-content")
contentcontainer.style.zindex = "2"
contentcontainer.style.position = "relative"
let custombg = document.createElement("div")
custombg.classList.add("custombg")
custombg.style.width = "100%"
custombg.style.height = "100vh"
custombg.style.position = "fixed"
custombg.style.top = "0"
custombg.style.left = "0"
custombg.style.zindex = "1"
custombg.style.backgroundRepeat = "no-repeat"
custombg.style.backgroundPosition = "center"
custombg.style.backgroundSize = "cover"
custombg.innerHTML = "<div class='bgblurrer'></div>"
appcontainer.prepend(custombg)
let custombgblurrer = document.querySelector("#app .custombg .bgblurrer")
custombgblurrer.style.width = "100%"
custombgblurrer.style.height = "100vh"
custombgblurrer.style.backgroundColor = "rgba(122,122,122,0.5)"


setInterval(() => {
    custombg.style.backgroundImage = `url(${songinfocursongcoverurl})`
    
},100)