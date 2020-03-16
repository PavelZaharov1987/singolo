window.onload = function() {
    addMenuLinkClickHandler();
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