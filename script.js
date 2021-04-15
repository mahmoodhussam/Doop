// Appears Header When Scroll Up 
let header = document.querySelector('.header');
let prevScroll = 0 ;
document.addEventListener("scroll", (e)=>{
    let currentScroll = window.pageYOffset;
    console.log(prevScroll);
    if(currentScroll < prevScroll) {
        header.style.top = '0px';
    }else {
        header.style.top = '-74px';
    }
    prevScroll = currentScroll;
});

// 
