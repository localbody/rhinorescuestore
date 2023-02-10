// inputLeft
const inputLeft = document.querySelector('#input__price-min')
// inputRight
const inputRight = document.querySelector('#input__price-max')
// $('.slider > .thumb.left')
const sliderThumbLeft = document.querySelector('.slider > .thumb.left')
// $('.slider > .range')
const sliderRange = document.querySelector('.slider > .range')
// $('.slider > .thumb.right')
const sliderThumbRight = document.querySelector('.slider > .thumb.right')
const price_min_rub = document.querySelector('#price_min_rub')
const price_max_rub = document.querySelector('#price_max_rub')

function setLeftValue() {
    let min = parseInt(inputLeft.getAttribute('min')), // Минимально допустимое число
        max = parseInt(inputLeft.getAttribute('max')), // Максимально допустимое число
        text = Math.min(
            parseInt(inputLeft.value),
            parseInt(inputRight.value) - 1
        ), // Минимальное значение ползунка
        percent = ((text - min) / (max - min)) * 100 // % Левого значения

    inputLeft.value = text
    price_min_rub.textContent = text + ' ₽'

    sliderThumbLeft.style.left = percent + '%'
    sliderRange.style.left = percent + '%'
}
setLeftValue()

function setRightValue() {
    let min = parseInt(inputRight.getAttribute('min')),
        max = parseInt(inputRight.getAttribute('max')),
        text = Math.max(
            parseInt(inputRight.value),
            parseInt(inputLeft.value) + 1
        ),
        percent = ((text - min) / (max - min)) * 100

    inputRight.value = text
    price_max_rub.textContent = text + ' ₽'

    sliderThumbRight.style.right = 100 - percent + '%'
    sliderRange.style.right = 100 - percent + '%'
}
setRightValue()

// inputLeft.bind('input', setLeftValue)
inputLeft.addEventListener('input', setLeftValue)
// inputRight.bind('input', setRightValue)
inputRight.addEventListener('input', setRightValue)
