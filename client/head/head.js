window.onload = function () {
    if (screen.width < 580) {
        var vp = document.getElementById('viewport')
        vp.setAttribute('content','width=580')
    }
}