const buttonMinusItems = document.querySelectorAll('.quantity-delete')

const buttonPlusItems = document.querySelectorAll('.quantity-plus')

const onClickMinus = (event) => {
    const inputQuantity = event.target
        .closest('.quantity')
        .querySelector('input')
    const countQuantity = inputQuantity.value

    if (countQuantity > 1) {
        inputQuantity.value = +countQuantity - 1
    }
}

buttonMinusItems.forEach((item) => {
    item.addEventListener('click', onClickMinus)
})

const onClickPlus = (event) => {
    const inputQuantity = event.target
        .closest('.quantity')
        .querySelector('input')
    const countQuantity = inputQuantity.value
    inputQuantity.value = +countQuantity + 1
}

buttonPlusItems.forEach((item) => {
    item.addEventListener('click', onClickPlus)
})
