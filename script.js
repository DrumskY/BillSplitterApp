const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const tipOption = document.querySelectorAll('option')
const count = document.querySelector('.count')
const cost = document.querySelector('.cost')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')

const checkError = () => {
    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Musisz uzupełnić wszsytkie pola'
        costInfo.style.display = 'none'
    }
    else {
        error.textContent = ''
        calculateCosts()
    }
}

const calculateCosts = () => {
    const result = (parseFloat(price.value) + (parseFloat(price.value) * parseFloat(tip.value))) / parseFloat(people.value)
    costInfo.style.display = 'block'

    cost.textContent = result.toFixed(2)
}
count.addEventListener('click', checkError)