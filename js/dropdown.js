function show(value) {
    document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".dropdown")
dropdown.onclick = function () {
    dropdown.classList.toggle("active")
}

// let menu = document.querySelectorAll('.sub-menu')

// menu.forEach((e, i) => {
//     e.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log(e.children[0])
//         if (!e.children[1].classList.contains('active')) {
//             e.children[1].classList.add('active');
//             e.children[1].style.height = 'auto';

//             let height = e.children[1].clientHeight + "px";

//             e.children[1].style.height = '0px';

//             setTimeout(function () {
//                 e.children[1].style.height = height;
//             }, 0);

//         } else {
//             e.children[1].style.height = '0px';

//             e.children[1].addEventListener('transitionend', function () {
//                 e.children[1].classList.remove('active');
//             }, {
//                 once: true
//             });
//         }
//         e.children[0].classList.toggle("active")
//     })
// })


