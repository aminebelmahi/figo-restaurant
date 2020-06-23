///// Adding functionalities to the Tab-Menu Section /////

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

    // loop through 'li' items and remove 'active' class
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })

    // Add 'active' class to clicked 'li' item
    e.target.classList.add("active");

  })
})


///// Inject Testimony to HTML /////

// Global UI Variables
const img = document.querySelector('.avatar');
const personName = document.querySelector('.name');
const info = document.querySelector('.info');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const testimonials = [{
  name: 'Eric Lemon',
  info: 'Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet, congue mauris rhoncus aenean vel. lorem ipsum dolor sit amet consectetur adipiscing.',
  avatar: 'https://i.ibb.co/d7S9dBL/avatar-1.jpg'
},
{
  name: 'Malika Emroud',
  info: 'Varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere, congue mauris rhoncus aenean vel.',
  avatar: 'https://i.ibb.co/nbp1D8W/avatar-2.jpg'
},
{
  name: 'Linda Clair',
  info: 'Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus.',
  avatar: 'https://i.ibb.co/fHXtpQC/avatar-3.jpg'
},
{
  name: 'Semantha Moon',
  info: 'Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.',
  avatar: 'https://i.ibb.co/Mp8t3XD/avatar-4.jpg'
}
]
// Starting Item
let currentItem = 0;

// Load initial item (on refresh)
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

// Display person based on item
function showPerson(person) {
  const item = testimonials[person];
  img.src = item.avatar;
  personName.textContent = item.name;
  info.textContent = item.info;
};

// Next Person Testimony
nextBtn.addEventListener('click', (e) => {
  currentItem++
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Previous Person Testimony
prevBtn.addEventListener('click', (e) => {
  currentItem--
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showPerson(currentItem);
});


///// Mobile Navigation Menu /////

navSlide = () => {
  const burger = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener("click", () => {
    console.log('test')
    navLinks.classList.toggle("nav-links-active");
  });


  document.addEventListener("click", (e) => {
    if (!['bars', 'burger-menu'].some(el => e.target.classList.contains(el))) {
      navLinks.classList.remove("nav-links-active");
    }
  });

};

navSlide();


