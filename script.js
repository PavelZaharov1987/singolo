window.onload = function() {
    addMenuLinkClickHandler();
    mobileMenu();
    addSliderClickHandler();
    addTabsClickHandler();
    addFeedbackModal();
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

const mobileMenu = () => {
    document.querySelector('.mobile-menu').addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.toggle('rotate');
        document.querySelector('#mobile-menu_bg').classList.toggle('hidden');
        document.querySelector('.mobile__navigation').classList.toggle('active');
    })
    document.querySelector('.mobile__navigation .navigation').addEventListener('click', (e) => {
        if (e.target.classList.contains('navigation_link')) {
            document.querySelector('.mobile-menu').classList.toggle('rotate');
            document.querySelector('#mobile-menu_bg').classList.toggle('hidden');
            document.querySelector('.mobile__navigation').classList.toggle('active');
        }
    })
}

// slider

document.querySelector('.vertical-i-button').addEventListener('click', function() {
    document.querySelector('.vertical-black-window').classList.toggle('active');
});

document.querySelector('.horizontal-i-button').addEventListener('click', function() {
    document.querySelector('.horizontal-black-window').classList.toggle('active');
});

const addSliderClickHandler = () => {
    let items = document.querySelectorAll('.slider__wrapper .slides');
    let currentItem = 0;
    let isEnabled = true;
    let background = document.querySelector('.slider');

    function changeCurrentItem(n) {
        currentItem = (n + items.length) % items.length;
    }

    function hideItem(direction) {
        isEnabled = false;
        items[currentItem].classList.add(direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('slides_visible', direction);
        });
        // document.querySelector('slider').classList.add('slider_bg ');
    }

    function showItem(direction) {
        items[currentItem].classList.add('next', direction);
        items[currentItem].addEventListener('animationend', function() {
            this.classList.remove('next', direction);
            this.classList.add('slides_visible');
            isEnabled = true;
        });
        if (!background.classList.contains('slider_bg')) {
            background.classList.add('slider_bg');
            document.querySelector('.arrow.right').classList.add('right-blue');
            document.querySelector('.arrow.left').classList.add('left-blue');
            document.querySelector('.slider__line').classList.add('slider_bg');
        } else {
            background.classList.remove('slider_bg');
            document.querySelector('.arrow.right').classList.remove('right-blue');
            document.querySelector('.arrow.left').classList.remove('left-blue');
            document.querySelector('.slider__line').classList.remove('slider_bg');
        }
    }

    function nextItem(n) {
        hideItem('to-left');
        changeCurrentItem(n + 1);
        showItem('from-right');
    }

    function previousItem(n) {
        hideItem('to-right');
        changeCurrentItem(n - 1);
        showItem('from-left');
    }

    document.querySelector('.control.left').addEventListener('click', function() {
        if (isEnabled) {
            previousItem(currentItem);
        }
    });

    document.querySelector('.control.right').addEventListener('click', function() {
        if (isEnabled) {
            nextItem(currentItem);
        }
    });
}

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

    const portfolioImages = document.querySelector('.tab__content');

    portfolioImages.addEventListener('click', (event) => {
        let imageStatus = event.target.classList.contains('tab_active');
        portfolioImages.querySelectorAll('li > img').forEach (el => el.classList.remove('tab_active'));
        imageStatus ? event.target.classList.remove('tab_active') : event.target.classList.add('tab_active');
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

const addFeedbackModal = () => {
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
}