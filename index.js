let imageElement = document.getElementById("image");

let defaultImageWidth = 200;
let originalImageWidth = defaultImageWidth;
imageElement.style.width = originalImageWidth + "px"; //setting the value of image width initially

function decrease() {
    if (defaultImageWidth <= 100) {
        document.getElementById("warningMessage").textContent = "Can't Visible.Increase the size of the Image.";
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        imageElement.style.width = defaultImageWidth + "px";
        document.getElementById("imageWidth").textContent = defaultImageWidth + "px";
        document.getElementById("warningMessage").textContent = "";
    }
}

function increase() {
    if (defaultImageWidth >= 300) {
        document.getElementById("warningMessage").textContent = "Too Big.Decrease the size of the Image";
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        imageElement.style.width = defaultImageWidth + "px";
        document.getElementById("imageWidth").textContent = defaultImageWidth + "px";
    }
}