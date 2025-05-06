'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Cookies message

// const message = document.createElement('div');
// const header = document.querySelector('.header');

// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';
// // Add the new element
// header.append(message);
// // Delete the element
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   // message.parentElement.removeChild(message);
//   message.remove();
// });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

///////////////////////////////////////
// Smooth Scrolling

btnScrollTo.addEventListener('click', function (e) {
  // const s1cords = section1.getBoundingClientRect();

  // Scrolling (old-school)
  // window.scrollTo({
  //   left: s1cords.left + window.scrollX,
  //   top: s1cords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  // Modern
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
