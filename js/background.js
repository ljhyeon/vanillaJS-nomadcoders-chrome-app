const images = [
    "0.JPG",
    "1.JPG",
    "2.JPG",
];
const IMG_LEN = images.length;

const chosenImage = images[Math.floor(Math.random() * IMG_LEN)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);