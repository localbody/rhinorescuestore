// cart__product-quantity
// cart__product-quantity-input input
// cart__product-quantity-delete
// cart__product-quantity-plus

const buttonMinusItems = document.querySelectorAll(
    '.cart__product-quantity-delete'
)

const buttonPlusItems = document.querySelectorAll(
    '.cart__product-quantity-plus'
)

const onClickMinus = (event) => {
    const inputQuantity = event.target
        .closest('.cart__product-quantity')
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
        .closest('.cart__product-quantity')
        .querySelector('input')

    const countQuantity = inputQuantity.value
    inputQuantity.value = +countQuantity + 1
}

buttonPlusItems.forEach((item) => {
    item.addEventListener('click', onClickPlus)
})
