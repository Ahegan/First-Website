function openNav() {
    document.getElementById("Nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("Nav").style.width = "0%";
}

function openMobNav() {
    document.getElementById("MobNav").style.height = "100%";
}

function closeMobNav() {
    document.getElementById("MobNav").style.height = "0%";
}

function rotate() {
    document.getElementById("rot").style.transform = "rotate(7turn)"
}

//whenever someone try to copy something on the page, it is remplaced by this message
document.addEventListener('copy', (e) => {
    e.clipboardData.setData('text/plain', 'How does it feel to steal other people\'s work ?');
    e.preventDefault();
});

//progress shadow under the navBar


window.addEventListener("scroll", () => {
    var variationRate = window.scrollY < 400 ? 0 : window.scrollY < 550 ? 1 : window.scrollY < 700 ? 2 : 4;
    variationRate = window.innerWidth < 520 && window.scrollY > 600 ? 5.5 : variationRate;
    var advancement = window.scrollY;
    var totalHeight = document.body.offsetHeight - window.innerHeight;
    var calculOnPercent = Math.floor((advancement * 100) / totalHeight);
    document.styleSheets[1].addRule(".menu::before", `width: ${calculOnPercent + variationRate}%`)
})




