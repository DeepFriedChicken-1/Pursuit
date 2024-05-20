const map =document.getElementById("map")
var i = 1
    while(i<=100){
        var div = document.createElement('div')
        div.setAttribute("num", String(i))
        map.appendChild(div)
        i++
    }
setTimeout(function(){
    var pepe = document.getElementById("pepe")
    pepe.style.top = "80vh"
    setTimeout(function(){
        pepe.style.left = "134vh"
    }, 1250)
}, 3000)

