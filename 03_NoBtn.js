let btnNo = document.getElementById("btnNo")

btnNo.onclick =() =>{
    let innerWidth = window.innerWidth
    let innerheight = window.innerHeight

    // consoole.log(innerWidth)
    // console.log(innerHeight)

    let randomX = Math.floor(Math.random() * (innerWidth -100));
    let randomY = Math.floor(Math.random() * (innerWidth -30));


    
    btnNo.style.left = `${randomX}px`
    btnNo.style.top = `${randomY}px`
}
let btnNo = document.getElementById("btnYes")
btnYes.onclick =()=>{

}

