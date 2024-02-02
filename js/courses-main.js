let postCards = document.querySelectorAll(".post-cards");
let postCard = document.querySelectorAll(".post-card");
let filter = document.querySelector('.filter');
let buttons = filter.querySelectorAll('button');
let listItems = Array.from(postCard);

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
