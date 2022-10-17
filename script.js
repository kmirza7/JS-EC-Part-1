//the selectors
let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

//event listener
btn1.addEventListener("click", function(e){
    e.preventDefault()

    //swap the values
    let text1Val = text1.value
    text1.value = text2.value
    text2.value = text1Val

    //changing the buttons
    btn1.style.display = "none"
    btn2.style.display = "inline"
})

btn2.addEventListener("click", function(e){
    e.preventDefault()

    //swapping the values
    let text1Val = text1.value
    text1.value = text2.value
    text2.value = text1Val

    //changing the buttons
    btn2.style.display = "none"
    btn1.style.display = "inline"
})