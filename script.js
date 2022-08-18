let editText= document.getElementById("textEdit")

let enterBtn= document.getElementById("enter")
enterBtn.onclick= (event)=>{
    event.preventDefault()

    let newText= document.getElementById("textEntered")
    let newTextValue= newText.value
    
    if (newTextValue == ""){
        editText.innerHTML= "(hello world)"
        editText.style.color= "grey"
    }
    else {
        editText.innerHTML= newTextValue
        editText.style.color= "black"
    }
}

// stuff about me that is subject to change
let myData= document.getElementById("myData")
myData.innerHTML= "High school "+ 
    aboutMe.year+ " and aspiring "+ 
    aboutMe.major+ " major. I am currently "+ 
    aboutMe.age+ " years old (as of "+
    aboutMe.date.month+ " "+ 
    aboutMe.date.year+ ")."