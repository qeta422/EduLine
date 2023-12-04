let postCards = document.getElementsByClassName("post-cards");
let faqAsides = document.getElementsByClassName("faq-asides");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let sliderContent = document.getElementById('slider-content');
let sliderIndex = 0;
let data = [
    {
        id: 1,
        imgURL: 'employee.jpg',
        title: 'image title1',
        url: '#'
    },

    {
         id: 2,
         imgURL: 'coder.jpg',
         title: 'image title2',
         url: '#'
        
    },
        
    {
         id: 3,
         imgURL: 'group.jpg',
         title: 'image title3',
         url: '#'
        
    },
        
    {
         id: 4,
         imgURL: 'graphic.jpg',
         title: 'image title4',
         url: '#'
        
    },
]


window.onscroll = () => {
    for (let i = 0; i < postCards.length; i++) {
        let sec = postCards[i];
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.remove('show-animate');
        } else {
            sec.classList.add('show-animate');
        }
    }
    for (let i = 0; i < faqAsides.length; i++) {
        let sec = faqAsides[i];
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    }
}

function createATag(item) {
    let Tag = document.createElement('a');
    Tag.setAttribute('href', item.url);
    Tag.setAttribute('class', 'slide');

    return Tag;
}

function createImgTag(item) {
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', item.imgURL);
    imgTag.setAttribute('alt', item.title);

    return imgTag;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });
    console.log(dots);
    return dots;
}


function slider() {
    sliderContent.innerHTML = ' ';
    let slideItem = createATag(data[sliderIndex]);
    let imgItem = createImgTag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgItem);
    sliderContent.appendChild(arrowLeft);
    sliderContent.appendChild(arrowRight);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);
}

arrowLeft.addEventListener('click', function() {
    if (sliderIndex <= 0) {
        return;
    }
    sliderIndex--;
    slider();
})

arrowRight.addEventListener('click', function() {
    if (sliderIndex >= data.length - 1) {
        return;
    }
    sliderIndex++;
    slider();
})

slider()