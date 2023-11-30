// let postCards = document.getElementsByClassName("post-cards");

// window.onscroll = () => {
//     for (let i = 0; i < postCards.length; i++) {
//         let sec = postCards[i];
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;

//         if (top >= offset && top < offset + height) {
//             sec.classList.remove('show-animate');
//         } else {
//             sec.classList.add('show-animate');
//         }
//     }
// }

let faqAsides = document.getElementsByClassName("faq-asides");

window.onscroll = () => {
    for (let i = 0; i < faqAsides.length; i++) {
        let sec = faqAsides[i];
        let top = window.scrollY;
        let offset = sec.offsetTop -250;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    }
}
