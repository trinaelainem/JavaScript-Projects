const imgcontainer = document.querySelector(".image-container");
const first = document.getElementById("prev");
const next = document.getElementById("next");

let a = 0;
let timeout;

prev.addEventListener("click", () => {
    a = a + 45;
    clearTimeout(timeout);
    updategallery();
});

next.addEventListener("click", () => {
    a = a - 45;
        clearTimeout(timeout);
    updategallery();
});

function updategallery() {
    imgcontainer.style.transform = `perspective(1000px) rotateY(${a}deg)`;
    timeout=setTimeout(() => {
        a = a - 45;



        updategallery();
    }, 4000);
}
updategallery();