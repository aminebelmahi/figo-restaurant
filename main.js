const tabs = document.querySelectorAll('[data-tab-target]');
const tabsContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {

    const target = document.querySelector(tab.dataset.tabTarget);

    // Loop through 'menu-content' and remove 'active' class
    tabsContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    // Add 'active' class to 'menu-content'
    target.classList.add('active');

    //loop through 'li' items and remove 'active' class
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })

    //add 'active' class to clicked 'li' item
    e.target.classList.add("active");

  })
})