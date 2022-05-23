// navigation bar javascript starts 


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}

// navigation bar javascript starts 


// statistics section starts

const num = document.querySelectorAll('.num');
const speed = 200;

num.forEach(item => {
    const animate = () => {
        const target = +item.getAttribute('num');
        const count = +item.textContent;

        const time = target / speed;

        if(count < target) {
            item.textContent = Math.ceil(count + time);
            setTimeout(animate, 1);
        }

    }
    animate();
})


const count = document.getElementById("visits");

incrementVisitsCount();

function incrementVisitsCount() {
    
    let visits;

    if (!localStorage.getItem("visits")) localStorage.setItem("visits", 1);


    else {
        visits = +localStorage.getItem("visits");
        const incrementedCount = visits + 1;

        localStorage.setItem("visits", incrementedCount);

    }
    

    count.textContent = localStorage.getItem("visits");
    
}


// function websiteVisits(reponse) {
//     document.querySelector("#visits").textContent = reponse.value;
// }


// statistics section ends


// slider section starts






