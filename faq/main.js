let faq = document.getElementsByClassName('faq');


window.onscroll = () => {
    for (let i = 0; i < faq.length; i++) {
        let asid = faq[i];
        let top = window.scrollY;
        let offset = asid.offsetTop -200;
        let height = asid.offsetHeight;
    
        if (top >= offset && top < offset + height) {
            asid.classList.add('show-animate');
        } else {
            asid.classList.remove('show-animate');
        }
    }
}