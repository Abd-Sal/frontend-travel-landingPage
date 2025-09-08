window.addEventListener('DOMContentLoaded', function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        pagination: {
            el: ".my-custome-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 20,
            },
            768: {
            slidesPerView: 1,
            spaceBetween: 40,
            },
            1024: {
            slidesPerView: 1,
            spaceBetween: 50,
            },
        },
    });
    let myMode = localStorage.getItem('Theme')
    if(myMode === 'dark') {
        document.body.classList.add('dark')
    }
    darkToggle();
});

function darkToggle(){
    let darkMode = document.getElementById('dark-mode');
    if(darkMode === null)
        return;
    darkMode.addEventListener('click', function(){
            let checkStorage = localStorage.getItem('Theme')

            if (checkStorage !== 'dark'){
                document.body.classList.add('dark')
                localStorage.setItem('Theme', 'dark')
                darkMode.innerHTML = '<i class="fas fa-sun"></i>'
            } else {
                document.body.classList.remove('dark')
                localStorage.removeItem('Theme')
                darkMode.innerHTML = '<i class="fas fa-moon"></i>'
            }
    });
}