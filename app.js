const slider = document.querySelector(".slider");
const containerBefore = document.querySelector(".img-container-before");
const containerAfter = document.querySelector(".img-container-after");
const container = document.querySelector(".container");

const drag = (e) => { // e represents the event; gives function access to event data
    let xPos = e.layerX;
    let size = container.offsetWidth; // get container size
    containerBefore.style.width = xPos + "px";
    slider.style.left = xPos + "px";

    // aids slider in aligning itself along the edges if mouse moves too fast
    if (xPos < 30) {
        //containerBefore.style.width = 0;
        //slider.style.left = 0;
    }
    if (xPos + 30 > size) {
        //containerBefore.style.width = size + "px";
        //slider.style.left = size + "px";
    }
}

container.addEventListener("mousemove", drag);
container.addEventListener("touchmove", drag); //for mobile/tablet