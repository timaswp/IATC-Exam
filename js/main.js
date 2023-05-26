// Копирование контактных данных в буфер обмена при нажатии

function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}

let contact = document.querySelectorAll('.copy_data')

for (i = 0; i < 3; i++) {
    contact[i].addEventListener("click", function() {
        copyToClipboard(this.innerText);
    });
}


function copyToClipboardInfo(){
    document.getElementById('clipboard').style.display = "block"
    setTimeout(function() {
        document.getElementById('clipboard').style.display = "none";
      }, 1000);
}


// Отображение иконки копирования при наведении на контактные данные

let copyIcon = document.querySelectorAll('.copy_icon')

function test(n){
    if (n == 1){
        copyIcon[0].style = "display: block;"
    } else if (n == 2){
        copyIcon[1].style = "display: block;"
    } else{
        copyIcon[2].style = "display: block;"
    }
}

function fade(n){
    if (n == 1){
        copyIcon[0].style = "display: none;"
    } else if (n == 2){
        copyIcon[1].style = "display: none;"
    } else{
        copyIcon[2].style = "display: none;"
    }
}


// for (k = 0; k < 3; k++) {
//     contact[k].addEventListener('mouseenter', function() {
//         test(k+1)
//     });
//     contact[k].addEventListener('mouseleave', function() {
//         fade(k+1)
//     });
// }

contact[0].addEventListener('mouseenter', function() {
    test(1)
})
contact[1].addEventListener('mouseenter', function() {
    test(2)
})
contact[2].addEventListener('mouseenter', function() {
    test(3)
})

contact[0].addEventListener('mouseleave', function() {
    fade(1)
})
contact[1].addEventListener('mouseleave', function() {
    fade(2)
})
contact[2].addEventListener('mouseleave', function() {
    fade(3)
})


//Adaptive Navbar

let sideMenu = document.getElementById('side-menu')
let burger = document.getElementsByClassName('burger')[0]
let nav = document.getElementsByTagName('NAV')[0]

function openMenu(){
    sideMenu.style = "left: 0;"
    burger.style.display = "none"
    nav.style = "transform: translateX(65%);"  
}

function closeMenu(){
    sideMenu.style = "left: -220px;"
    burger.style.display = "block"
    nav.style = "transform: translateX(0%);"
}