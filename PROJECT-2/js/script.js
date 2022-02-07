// Main-Slide-Image


let slide_image = document.getElementById("image");
let imagess = ["images/main-slider/1.jpg", "images/main-slider/2.jpg"]
setInterval(function() {
    let random = Math.floor(Math.random() * 2);
    image.src = imagess[random];
}, 3500);


// testmonial-section slide's


var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }

}, 8000);




// Scroll to Top