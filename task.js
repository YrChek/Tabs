const tab = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))
function onClick (e) {
    let select = e.target
    let parent = select.closest('.tab__navigation')
    let neighbour = parent.nextElementSibling
    parent.querySelector('.tab_active').classList.remove('tab_active')
    select.classList.add('tab_active')
    let index = tab.indexOf(select)
    neighbour.querySelector('.tab__content_active').classList.remove('tab__content_active')
    tabContent[index].classList.add('tab__content_active')
}

tab.forEach((el) => {
    el.addEventListener('click', onClick)
})