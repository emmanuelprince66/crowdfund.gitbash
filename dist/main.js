const colorChange = document.querySelector('.body_first_flex-style');
const divColorChange = document.querySelector('#divBox');
const ham = document.querySelector('.menu_btn');
const hamburger = document.querySelector('.menu_btn_hamburger');
const icons = document.querySelector('.closeicon');
const modal = document.querySelector('.modal');
const bod = document.querySelector('#color');
const bod1 = document.querySelector('#color1');
const bod2 = document.querySelector('#color2');
const xx = document.querySelector('.modal_x');


const openner = document.querySelector('#opener')
const opa = document.querySelector('#opacity');

const forrma = document.querySelector('#forma')
const form = document.querySelector('#formality');
const forma = document.querySelector('#foro');


const cullerr = document.querySelector('#culler')
const cul = document.querySelector('#culacity');

const pak = document.querySelector('#pakality');
const pakker = document.querySelector('#paker');
const pokke = document.querySelector('#poke');

forrma.addEventListener ( 'change' , (e) => {
    if(forrma.checked) {
        form.classList.add('bord');
        forma.classList.add('veiw')
    }
    else {
        forma.classList.remove('view');
        form.classList.remove('bord');
    }
})

pakker.addEventListener( 'change' , (e) => {
    if(pakker.checked) {
        pokke.classList.add('view');
        pak.classList.add('bord');
    }
    
    else {
        pokke.classList.remove('view');
        pak.classList.remove('bord');
    } 
})

xx.addEventListener( 'click' , () => {
    if(!showHam) {
        modal.classList.remove('show');
        bod1.classList.remove('body');
        bod2.classList.remove('body');
        bod.classList.remove('body');
    }
    else {
        console.log('sucess');
    }
})


let showMenu = false;
let showHam = false;

colorChange.addEventListener('mouseover' , toggleMenu);

//fuction for ham toggle...
ham.addEventListener('click' , toggleHam);

function toggleHam () {
    if(!showHam) {
        hamburger.classList.add('open');
        icons.classList.add('open');
        showHam = true;
    }

    else {
        hamburger.classList.remove('open');
        icons.classList.remove('open');
        showHam= false;
    }
}
//function for mouse event...
function toggleMenu() {
    if (!showMenu) {
        colorChange.classList.add('cursor');
        showMenu = true;
    }
    else {
        colorChange.classList.remove('cursor');
        showMenu = false;
    }
}

// function for click event...
colorChange.addEventListener('click' , toggleClick );

function toggleClick(){
    if (!showMenu) {
        colorChange.style.background = 'hsl(176, 72%, 28%)';
        divColorChange.style.background = 'lightcyan';
        divColorChange.classList.add('bookcolor');
        modal.classList.add('show');
        bod.classList.add('body');
        bod1.classList.add('body');
        bod2.classList.add('body');

        showMenu = true;
    }
    else {
        colorChange.style.background = 'hsl(176, 50%, 47%)';
        divColorChange.classList.remove('bookcolor');
        divColorChange.style.background = 'lightgrey';
        modal.classList.remove('show');
        bod.classList.remove('body');
        bod1.classList.remove('body');
        bod2.classList.remove('body');

        showMenu = false;

    }
}
