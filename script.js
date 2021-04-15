// Appears Header When Scroll Up 
let header = document.querySelector('.header');
let prevScroll = 0 ;
const HeaderScroll = (e) => {
    let currentScroll = window.pageYOffset;
    if(currentScroll > "74") {
        if(currentScroll < prevScroll) {
            header.style.top = '0px';
        }else {
            header.style.top = '-74px';
        }
        prevScroll = currentScroll;
    }
};
document.addEventListener("scroll", HeaderScroll);

// Images Gallery Clickable

let works_imgs = document.querySelectorAll('.works-imgs img');
works_imgs.forEach(img =>{
    img.addEventListener("click" , (e)=>{
        let popup_overlay = document.createElement("div");
        popup_overlay.classList.add("popup-overlay");
        document.body.appendChild(popup_overlay);
        let popup_image = document.createElement("img");
        popup_image.src = img.src;
        popup_image.classList.add("popup-img");
        popup_overlay.appendChild(popup_image);
        let popup_close = document.createElement("i");
        popup_close.classList.add("popup-close");
        popup_close.classList.add("far");
        popup_close.classList.add("fa-times-circle");
        popup_overlay.appendChild(popup_close);
        popup_close.addEventListener("click", (e)=>{
            popup_overlay.remove();
        });
    })
});

