// ============================
// MATRIX RAIN EFFECT
// ============================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$#%&*";

const fontSize = 16;

const columns = Math.floor(canvas.width / fontSize);

const drops = [];

for (let i = 0; i < columns; i++) {

    drops[i] = 1;

}

function drawMatrix() {

    ctx.fillStyle = "rgba(5,8,22,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ffff";

    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text =
        letters[Math.floor(Math.random()*letters.length)];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.98
        ) {

            drops[i] = 0;

        }

        drops[i]++;

    }

}

setInterval(drawMatrix,35);


// ============================
// RESIZE
// ============================

window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

});


// ============================
// DIGITAL CLOCK
// ============================

const clock =
document.getElementById("clock");

function updateClock(){

const date = new Date();

let h = String(
date.getHours()
).padStart(2,"0");

let m = String(
date.getMinutes()
).padStart(2,"0");

let s = String(
date.getSeconds()
).padStart(2,"0");

clock.innerHTML =
`${h}:${m}:${s}`;

}

setInterval(updateClock,1000);

updateClock();


// ============================
// AI TYPING TEXT
// ============================

const typing =
document.getElementById("typing");

const message =
"Initializing Artificial Intelligence...";

let index = 0;

function typeText(){

if(index < message.length){

typing.innerHTML +=
message.charAt(index);

index++;

setTimeout(typeText,60);

}

}

typeText();

// ============================
// PASSWORD SHOW / HIDE
// ============================

const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";

        toggle.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    }else{

        password.type = "password";

        toggle.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

});


// ============================
// CURSOR GLOW
// ============================

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// ============================
// 3D LOGIN CARD
// ============================

const login =
document.querySelector(".login");

document.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth/2-e.clientX)/25;

    const y =
    (window.innerHeight/2-e.clientY)/25;

    login.style.transform =

    `rotateY(${x}deg)
     rotateX(${-y}deg)
     scale(1.02)`;

});

document.addEventListener("mouseleave",()=>{

    login.style.transform =
    "rotateX(0deg) rotateY(0deg)";

});


// ============================
// PARTICLES
// ============================

const particleBox =
document.querySelector(".particles");

for(let i=0;i<70;i++){

    const p =
    document.createElement("span");

    p.style.position="absolute";

    let size =
    Math.random()*6+2;

    p.style.width=size+"px";
    p.style.height=size+"px";

    p.style.background="cyan";

    p.style.borderRadius="50%";

    p.style.opacity=Math.random();

    p.style.left=
    Math.random()*100+"%";

    p.style.top=
    Math.random()*100+"%";

    p.style.animation=
    `float ${6+Math.random()*8}s linear infinite`;

    particleBox.appendChild(p);

}


// ============================
// RANDOM GLOW
// ============================

setInterval(()=>{

login.style.boxShadow=

`0 0 ${
20+Math.random()*30
}px rgba(0,255,255,.5)`;

},800);


// ============================
// BUTTON RIPPLE
// ============================

const btn =
document.querySelector("button");

btn.addEventListener("click",(e)=>{

e.preventDefault();

const ripple =
document.createElement("span");

const rect =
btn.getBoundingClientRect();

ripple.style.left =
(e.clientX-rect.left)+"px";

ripple.style.top =
(e.clientY-rect.top)+"px";

ripple.classList.add("ripple");

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});


// ============================
// FADE IN
// ============================

window.onload=()=>{

login.style.opacity="0";

login.style.transform=
"translateY(60px)";

setTimeout(()=>{

login.style.transition="1s";

login.style.opacity="1";

login.style.transform=
"translateY(0px)";

},300);

};