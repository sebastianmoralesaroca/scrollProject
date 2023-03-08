const btnBurger = document.getElementById ("btnBurger") ;
const menu = document.getElementById ("menu") ;
const menuUl = document.getElementById ("menuUl") ;
const menuLi = document.getElementById ("menuLi") ;
const itemMenu1 = document.getElementById ("menuLi1") ;
const itemMenu2 = document.getElementById ("menuLi2") ;
const itemMenu3 = document.getElementById ("menuLi3") ;
const itemMenu4 = document.getElementById ("menuLi4") ;

function myStyle () {
    menu.style.display = "block" ;
    menu.style.width = "90%" ;
    menu.style.height = "190px" ;
    menu.style.backgroundColor = "#102F43" ;
    menu.style.marginLeft = "5%" ;
    menu.style.marginTop = "0px" ;
    menu.style.transition = ".7s" ;
    menuUl.style.display = "block" ;
    menuUl.style.textAlign = "center" ;
    itemMenu1.style.display = "block" ;
    itemMenu1.style.marginTop = "10px" ;
    itemMenu2.style.display = "block" ;
    itemMenu2.style.marginTop = "10px" ;
    itemMenu3.style.display = "block" ;
    itemMenu3.style.marginTop = "10px" ;
    itemMenu4.style.display = "block" ;
    itemMenu4.style.marginTop = "10px" ;
}

i = 0 ;

btnBurger.addEventListener("click", () => {
    console.log("click!") ;
    i = i + 1 ;
    if (i == 1) {
        myStyle() ;
    } else {
        menu.style.display = "none" ;
        menuUl.style.display = "none" ;
        i = 0 ;
    }
}) ;
