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

// Options Setting 
let menu = document.querySelector(".header-menu .menu");
let optionHeaderLocal = localStorage.getItem("option-header");
let optionHeader = document.querySelectorAll(".option-header-answer span");
if(optionHeaderLocal != null) {
    optionHeader.forEach(span =>{
        span.classList.remove("active");
    });
    if(optionHeaderLocal == "yes") {
        document.querySelector(".option-header-answer .yes").classList.add("active");
        console.log("add to yes");
    }
    else {
        console.log("add to no")
        document.querySelector(".option-header-answer .no").classList.add("active");
        header.style.position = "relative";
        document.removeEventListener("scroll",HeaderScroll);
    }
}
optionHeader.forEach(span => {
    span.addEventListener("click", (e)=>{
        optionHeader.forEach(ele=>{
            ele.classList.remove("active");
        });
        if(e.target.dataset.header == "no") {
            console.log("Header Scroll Remove")
            header.style.position = "relative";
            document.removeEventListener("scroll", HeaderScroll);
        }
        else {
            console.log("Header Scroll Added");
            header.style.position = "fixed";
            document.addEventListener("scroll", HeaderScroll);
        }
        localStorage.setItem("option-header", e.target.dataset.header);
        e.target.classList.add("active");
    });
});
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

// Add Option Box 

let options = document.querySelector(".options");
let options_icon = document.querySelector(".options .setting-icon")
options_icon.addEventListener("click" , ()=>{
    if(options.style.left == "0px") {
        options.style.left = "-250px";
    }
    else {
        options.style.left = "0px";
    }
})