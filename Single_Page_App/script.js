
const button = document.getElementById("dog-button");
const image = document.getElementById("dog-image");
const status = document.getElementById("status");

button.addEventListener("click", function() {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.src = data.message;
            image.hidden = false;
            status.textContent = "Here is your dog!";
        })
        .catch(error => {
            status.textContent = "Something went wrong!";
            console.log(error);
        });

});
