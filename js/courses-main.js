let postCards = document.querySelectorAll(".post-cards");
let postCard = document.querySelectorAll(".post-card");
let filter = document.querySelector('.filter');
let buttons = filter.querySelectorAll('button');
let listItems = Array.from(postCard);

window.onscroll = () => {
    for (let i = 0; i < postCards.length; i++) {
        let sec = postCards[i];
        let top = window.scrollY;
        let offset = sec.offsetTop - 260;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    }
}

function filterData(searchItem) {
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        filterData(event.target.innerText);
    });
});
