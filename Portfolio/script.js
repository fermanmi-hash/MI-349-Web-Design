// Dark and Light Mode Toggle

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }

});


// ScrollReveal Animation

if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal("main section", {
        distance: "30px",
        duration: 1000,
        origin: "bottom",
        interval: 200
    });
}