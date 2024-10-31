const toggleAccordion = (id, imgId) => {
  const accordion = document.getElementById(id);
  accordion.classList.toggle("accordion-active");
  const arrow = document.getElementById(imgId);
  arrow.classList.toggle("accordion-active");
  const cookies = document.querySelector('.cookies')
};

// const toggleAccordionArrow = (id) => {
//   const arrow = document.getElementById(id);
//   arrow.classList.toggle("accordion-active");
// };
