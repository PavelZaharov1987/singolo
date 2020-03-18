window.onload = function() {
    addMenuLinkClickHandler();
    addTabsClickHandler();
}

// navigation menu script

const addMenuLinkClickHandler = () => {
    document.addEventListener('scroll', onScroll);
}

function onScroll(event) {
    const currentPosition = window.scrollY;
    const section = document.querySelectorAll('main section');
    const links = document.querySelectorAll('.navigation .navigation_link');

    section.forEach((el) => {
        if (el.offsetTop - 95 <= currentPosition && (el.offsetTop - 95 + el.offsetHeight) > currentPosition) {
            links.forEach((a) => {
                a.classList.remove('navigation_active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('navigation_active');
                }
            })
        }
    })
}

// slider

var slideIndex = 1; // Индекс слайда по умолчанию
showSlides(slideIndex);

document.querySelector('.control.left').addEventListener('click', () => {
    minusSlide();
})

document.querySelector('.control.right').addEventListener('click', () => {
    plusSlide();
})

const plusSlide = () => {
    showSlides(slideIndex += 1);
}

const minusSlide = () => {
    showSlides(slideIndex -= 1);  
}

const currentSlide = (n) => {
    showSlides(slideIndex = n); // Устанавливает текущий слайд
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider-item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider-item_visible');
    }
    slides[slideIndex - 1].classList.add('slider-item_visible');
}

// const addSliderClickHandler = () => {
 
// }

// navigation portfolio tabs script

const addTabsClickHandler = () => {
    document.querySelector('.tab').addEventListener('click', (event) => {
        if (event.target.classList.contains('tab-button')) {
            let clickedTab = event.target;
            removeSelectedTabs();
            selectClickedTab(clickedTab);
            mixImages();
        }
    })
    document.querySelector('.tab__content').addEventListener('click', (event) => {
        if (event.target.classList.contains('tab__image')) {
            let clickedImage = event.target;
            document.querySelector('.tab__content').querySelectorAll('.tab__image').forEach(item => {
                item.classList.remove('tab_active');
            });
            selectClickedImage(clickedImage);
        }
    })
}

const removeSelectedTabs = () => {
    let tabs = document.querySelectorAll('.tab .tab-button');
    tabs.forEach(tab => {
        tab.classList.remove('tab-button_active');
    })
}

const selectClickedTab = (clickedTab) => {
    clickedTab.classList.add('tab-button_active');
}

const mixImages = () => {
    let gallery = document.querySelector('.tab__content');
    let pictures = Array.from(document.querySelectorAll('.tab__image'));
    let newGallery = pictures.sort(function() {return Math.random() - 0.5});
    newGallery.forEach(item=>gallery.append(item));
    gallery.querySelectorAll('.tab__image').forEach(item => {
        item.classList.remove('tab_active');
    });
}

const selectClickedImage = (clickedImage) => {
    clickedImage.classList.add('tab_active');
}

// feedback modal

const form = document.querySelector('#form');
const closeButton = document.querySelector('#close-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const subject = document.querySelector('#subject').value.toString();
    const comment = document.querySelector('#comment').value.toString();
    if (subject === "") {
        document.querySelector('#subject_result').innerText = 'Без темы';
    } else {
        document.querySelector('#subject_result').innerText = 'Тема: ' + subject;
    }
    if (comment === "") {
        document.querySelector('#comment_result').innerText = 'Без описания';
    } else {
        document.querySelector('#comment_result').innerText = 'Описание: ' + comment;
    }
    document.querySelector('#message-block').classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    document.querySelector('#subject_result').innerText = '';
    document.querySelector('#comment_result').innerText = '';
    document.querySelector('form').reset();
    document.querySelector('#message-block').classList.add('hidden');
});