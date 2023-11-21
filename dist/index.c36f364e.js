var menuIcon = document.getElementById("menu-icon");
var fullscreenMenu = document.getElementById("fullscreen-menu");
menuIcon.addEventListener("click", function() {
    if (fullscreenMenu.style.right === "0px") {
        fullscreenMenu.style.right = "100%";
        menuIcon.querySelectorAll(".bar").forEach((bar)=>bar.classList.remove("opened"));
    } else {
        fullscreenMenu.style.right = "0";
        menuIcon.querySelectorAll(".bar").forEach((bar)=>bar.classList.add("opened"));
    }
});
fullscreenMenu.addEventListener("click", function() {
    fullscreenMenu.style.right = "100%";
    menuIcon.querySelectorAll(".bar").forEach((bar)=>bar.classList.remove("opened"));
});

//# sourceMappingURL=index.c36f364e.js.map
