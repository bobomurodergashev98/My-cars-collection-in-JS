
const slidercontainer = document.querySelector('.slider-container');
const slideright = document.querySelector('.right-slide');
const slideleft = document.querySelector('.left-slide');
const upbutton = document.querySelector('.up-button');
const downbutton = document.querySelector('.down-button');
const slidelength = slideright.querySelectorAll('.n');
slidercontainer.style.overflow=`hidden`;


function fun(car){
    switch (car) {
        case 'bugatti':
            location.href="https://www.bugatti.com/"
        break;
        case 'lambo':
            location.href="https://www.lamborghini.com/en-en/models/aventador"
        break;
        case 'nissan':
            location.href="https://www.nissanusa.com/"
        break;
        case 'mers':
            location.href="https://www.mercedes-amg.com/"
        break;
        case 'bmw':
            location.href="https://www.bmwusa.com/vehicles/m-models/m5-sedan/overview.html"
        break;
        case 'mustang':
            location.href="https://www.ford.com/cars/mustang/"
        break;
    
    }

}

let activeslideindex=0;
slideleft.style.top = `-500vh`
upbutton.addEventListener('click' , () => changeslide('up'))
downbutton.addEventListener('click' , () => changeslide('down'))

const changeslide = (direction) => {
    const sliderheight = slidercontainer.clientHeight
    if (direction === 'up') {
        activeslideindex++
        console.log(activeslideindex);
        if (activeslideindex === 6) {
            activeslideindex = 0
        }

    } else if (direction === 'down') {
        activeslideindex--
        if (activeslideindex < 0) {
            activeslideindex = 5;
        }
    } 
    slideright.style.transform = `translateY(-${activeslideindex*sliderheight}px)`
    slideleft.style.transform = `translateY(${activeslideindex*sliderheight}px)`

}
