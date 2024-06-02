const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password1 = document.querySelector("#password1")
const password2 = document.querySelector("#password2")
const but = document.querySelector("#but")
const male = document.querySelector("#male")
const female = document.querySelector("#female")
const confirmData = document.querySelector("#confirm_data")

const form = document.querySelector("form")


const data = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const user = {
        username: username.value
    }
    data.push(user)
    console.log(user);
})


username.addEventListener("input", (e) => {
    if (username.value.length >= 4 && email.value && password1.value && password2.value && confirmData.checked && (male.checked || female.checked)){
        but.disabled = false
    } else{
        but.disabled = true
    }

})
email.addEventListener("input", (e) => {
    if (username.value.length >= 4 && email.value && password1.value && password2.value && confirmData.checked && (male.checked || female.checked)){
        but.disabled = false
    } else{
        but.disabled = true
    }


})

password1.addEventListener("input", (e) => {
    if (username.value.length >= 4 && email.value && password1.value && password2.value && confirmData.checked && (male.checked || female.checked)){
        but.disabled = false
    } else{
        but.disabled = true
    }

})

password2.addEventListener("input", (e) => {
    if (username.value.length >= 4 && email.value && password1.value && password2.value && confirmData.checked && (male.checked || female.checked)){
        but.disabled = false
    } else{
        but.disabled = true
    }

})
male.addEventListener("input", (e) => {
    if (username.value.length >= 4 && email.value && password1.value && password2.value && confirmData.checked && (male.checked || female.checked)){
        but.disabled = false
    } else{
        but.disabled = true
    }

    
})
female.addEventListener("input", (e) => {
    if (username.value.length >= 4 && email.value && password1.value && password2.value && confirmData.checked && (female.checked || male.checked)){
        but.disabled = false
    } else{
        but.disabled = true
    }

})
confirmData.addEventListener("input", (e) => {
    if (username.value.length >= 4 && email.value && password1.value && password2.value && confirmData.checked && (male.checked || female.checked)){
        but.disabled = false
    } else{
        but.disabled = true
    }

})


