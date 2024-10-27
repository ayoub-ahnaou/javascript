let left_arrow = document.querySelector(".fa-arrow-left");
let right_arrow = document.querySelector(".fa-arrow-right");
let img = document.getElementById("image");

const images = [
  { src: "assets/images/img_1.jpg" },
  { src: "assets/images/img_2.jpg" },
  { src: "assets/images/img_3.webp" },
  { src: "assets/images/img_4.webp" },
  { src: "assets/images/img_5.webp" },
  { src: "assets/images/img_6.webp" },
];

let position = 0;
img.src = images[0].src;

function next() {
    if(position == images.length - 1) 
        position = 0;
    if(position >= 0 && position < images.length) {
        img.src = images[position + 1].src;
        position++;
    }
    console.log(position);
}
function previous() {
    if(position == 0)
        position = images.length - 1;
    if(position >= 0 && position < images.length) {
        img.src = images[position - 1].src;
        position--;
    }
}

right_arrow.addEventListener("click", () => {
    next();
})
left_arrow.addEventListener("click", () => {
    previous();
})


