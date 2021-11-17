var buttonElement1 = document.getElementById('button1')
var carcrash2 = document.getElementById("carcrash2")
var buttonElement2 = document.getElementById('button2')
var carskid = document.getElementById("carskid")
var buttonElement3 = document.getElementById('button3')
var carscreech = document.getElementById("carscreech")
var hover_fx = (document.getElementById("hover_fx"))


buttonElement1.addEventListener('mouseenter', function () {
    hover_fx.play()
})

buttonElement1.addEventListener('click', function () {
    carcrash2.play()
})

buttonElement2.addEventListener('mouseenter', function () {
    hover_fx.play()
})

buttonElement2.addEventListener('click', function () {
    carskid.play()
})

buttonElement3.addEventListener('mouseenter', function () {
    hover_fx.play()
})

buttonElement3.addEventListener('click', function () {
    carscreech.play()
})