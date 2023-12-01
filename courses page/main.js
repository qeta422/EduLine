let postCards = document.getElementsByClassName("post-cards");

window.onscroll = () => {
    for (let i = 0; i < postCards.length; i++) {
        let sec = postCards[i];
        let top = window.scrollY;
        let offset = sec.offsetTop -360;    
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    }
}
