const form = document.querySelector('.form')
const checkbox = form.querySelector('.checkbox')
const delivery = document.getElementById('del')
const date31 = document.getElementById('date31')
const date30 = document.getElementById('date30')
const date29 = document.getElementById('date29')
const month = document.getElementById('month')
const card_number = form.querySelector('.card_number')
const btn = form.querySelector('.btn')
const input = form.querySelectorAll('.input')
const only_num = form.querySelectorAll('.only_num')
const entry_field = form.querySelectorAll('.entry_field')
const send_value = form.querySelectorAll('.send_value')
const date_hidden = form.querySelectorAll('.date_hidden')
const result = form.querySelector('.result')
const confirm_pass = form.querySelector('.confirm_pass')
const pass = form.querySelector('.pass')
const values = document.querySelector('.values')


//кнопка отправить становится disabled, если не все поля заполнены
window.addEventListener('input', function () {
    for (let i = 0; i < entry_field.length; i++) {
        if (entry_field[i].value.length < 2) {
            btn.removeAttribute("href", '#')
            btn.style.cursor = 'auto'
            btn.style.background = '#aaa'
            return
        } else {
            btn.setAttribute("href", '#')
            btn.style.cursor = 'pointer'
            btn.style.background = '#eee'
        }
    }
})

//показать/скрыть меню адрес доставки
checkbox.addEventListener('change', function () {
    if (this.checked) {
        delivery.hidden = true
    } else {
        delivery.hidden = false
    }
})

//Ввод только чисел 
window.addEventListener('input', function () {
    for (let i = 0; i < only_num.length; i++) {
        only_num[i].value = only_num[i].value.replace(/[^\d+]/g, '')
    }
})

//скрывает лишние дни в месяце
month.addEventListener('change', function () {
    for (let i = 0; i < date_hidden.length; i++) {
        if (this.options.selectedIndex == 1) {
            date_hidden[i].hidden = true
        } else if (this.options.selectedIndex == 3 || this.options.selectedIndex == 5 || this.options.selectedIndex == 8 || this.options.selectedIndex == 10) {
            date_hidden[0].hidden = false
            date_hidden[1].hidden = false
            date_hidden[2].hidden = true
        } else {
            date_hidden[i].hidden = false
        }
    }
})

//подчеркивание полей
window.addEventListener("load", start, false)
function start() {
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener("input", updateFirst, false)
        function updateFirst() {
            if (input[i].value.length <= 2) {
                input[i].style.borderBottom = '2px solid rgba(255, 0, 0, 0.5)'
            } else {
                input[i].style.borderBottom = '2px solid rgba(0, 255, 0, 0.5)'
            }
        }
    }
}

//проверка правильности номера карты
window.addEventListener("load", startup, false)
function startup() {
    card_number.addEventListener("input", updateFirst, false)
}
function updateFirst() {
    if (card_number.value.length < 16 || card_number.value.length > 20) {
        card_number.style.borderBottom = '2px solid rgba(255, 0, 0, 0.5)'
    } else {
        card_number.style.borderBottom = '2px solid rgba(0, 255, 0, 0.5)'
    }
}

btn.addEventListener('click', () => {
    const obj = {
        bike_list: form.bike_list.value,
        about: form.about.value,
        name: form.name.value,
        last_name: form.last_name.value,
        address: form.address.value,
        post_index: form.post_index.value,
        tel: form.tel.value,
        checkbox_delivery: form.checkbox_delivery.value,
        delivery_name: form.delivery_name.value,
        delivery_last_name: form.delivery_last_name.value,
        delivery_region: form.delivery_region.value,
        delivery_address: form.delivery_address.value,
        delivery_post_index: form.delivery_post_index.value,
        delivery_tel: form.delivery_tel.value,
        year: form.year.value,
        month: form.month.value,
        date: form.date.value,
        card_num: form.card_num.value,
        card_validity: form.card_validity.value,
        card_cvv_code: form.card_cvv_code.value,
        user: form.user.value,
        pass: form.pass.value,
        confirm_pass: form.confirm_pass.value,
    }
    console.log(obj)
    values.innerHTML = JSON.stringify(obj, 0, 1)
})