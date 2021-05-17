// swiper plugon
new Swiper(".services .swiper-container", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination"
    }
})


new Swiper(".reviews .swiper-container", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination"
    }
})


new Swiper(".customers .swiper-container", {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 25,
    pagination: {
        el: ".swiper-pagination"
    }
})




// isotope plugin
let iso = new Isotope(".portfolio .grid", {
    itemSelector: ".grid-item"
});


document.querySelectorAll(".portfolio .filters span").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".portfolio .filters span").forEach((i) =>  
        i.classList.remove("font-weight-bold"));
        item.classList.add("font-weight-bold");
        iso.arrange({filter: item.getAttribute("data-filter") });
    });
});