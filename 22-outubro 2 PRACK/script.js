
const toggleAccordion = (id) => {
    const accordion = document.getElementById(id)
    accordion.classList.toggle('accordion-active')
    const arrow = document.getElementById(acc-arrow)
    arrow.classList.toggle('accordion-active')
    
}

const toggleAccordionArrow = (id) => {
    const arrow = document.getElementById(id)
    arrow.classList.toggle('accordion-active')
}