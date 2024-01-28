init = () => {

    let icons = document.querySelector("#link_footer").querySelectorAll(".footer_link_icon");
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.animation = "bounce 4s ease " + i / 3 + "s 2";
        // icon.style.animation = "bounce 2s"
    }

    let project_cards = document.querySelectorAll(".project_card")
    for (let card of project_cards) {
        let pre_img_btn = card.querySelector(".pre_img_btn");
        let next_img_btn = card.querySelector(".next_img_btn");
        let total_img_page = card.querySelector(".total_img_page");
        total_img_page.innerText = card.querySelector(".project_image").children.length;
        if (total_img_page.innerText <= 1) {
            next_img_btn.parentElement.classList.add("hide");
            continue;
        }
        pre_img_btn.addEventListener("click", () => {
            let images = card.querySelector(".project_image").children;
            let present_page = card.querySelector(".present_img_page");
            toggle_picture(images, Number(present_page.innerText), Number(present_page.innerText)-1);
            present_page.innerText = Number(present_page.innerText) - 1;
            if (present_page.innerText == 1) pre_img_btn.classList.add("hide");
            next_img_btn.classList.remove("hide");
        })
        next_img_btn.addEventListener("click", () => {
            let images = card.querySelector(".project_image").children;
            let present_page = card.querySelector(".present_img_page");
            toggle_picture(images, Number(present_page.innerText), Number(present_page.innerText)+1);
            present_page.innerText = Number(present_page.innerText) + 1;
            pre_img_btn.classList.remove("hide")
            if (present_page.innerText == total_img_page.innerText) next_img_btn.classList.add("hide");
        })
    }
}

toggle_picture = (images, present_page, target_page) => {
    console.log(images[present_page]);
    images[present_page-1].classList.add("hide");
    images[target_page-1].classList.remove("hide");
}


init();
// document.addEventListener("DOMContentLoaded", () => {
//     init();
// });

// window.onload = () => {
//     init();
// }