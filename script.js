window.onload = function() {
    addMenuLinkClickHandler();
    addSliderClickHandler();
    addTabsClickHandler();
}

// navigation menu script

const addMenuLinkClickHandler = () => {
    document.querySelector('.navigation').addEventListener('click', (event) => {
        if (event.target.classList.contains('navigation_link')) {
            let clickedMenuLink = event.target;
            removeSelectedMenuLinks();
            selectClickedMenuLink(clickedMenuLink);
        }
    })
}

const removeSelectedMenuLinks = () => {
    let tabs = document.querySelectorAll('.navigation .navigation_link');
    tabs.forEach(tab => {
        tab.classList.remove('navigation_active');
    })
}

const selectClickedMenuLink = (clickedMenuLink) => {
    clickedMenuLink.classList.add('navigation_active');
}

// slider

const next = document.querySelector('.slider-item:before');
const prev = document.querySelector('.slider-item:after');


const addSliderClickHandler = () => {
    next.addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });

    prev.addEventListener('click', () => {
        showSlides(slideIndex -= 1);
    })
}

const showSlides = (count) => {
    let slides = document.querySelectorAll('.slider-item');
    if (count > slides.length) {
        slideIndex = 1;
    }
    if (count < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(slide => {
        slide.classList.add('slider-item_visible');
    })
    slides[slideIndex - 1].classList.remove('slider-item_visible');
}

// navigation portfolio tabs script

const addTabsClickHandler = () => {
    document.querySelector('.tab').addEventListener('click', (event) => {
        if (event.target.classList.contains('tab-button')) {
            let clickedTab = event.target;
            removeSelectedTabs();
            selectClickedTab(clickedTab);
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

// feedback modal

const button = document.querySelector('#btn');
const closeButton = document.querySelector('#close-btn');

button.addEventListener('click', (e) => {
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