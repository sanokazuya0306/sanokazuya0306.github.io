const sliderImages_fv = document.querySelectorAll('.slide_fv');
const sliderImages_gl = document.querySelectorAll('.slide_gl');
const sliderBar_gl = document.getElementsByClassName('slide_bar');

let currentFv = 0;
const arrayFv = sliderImages_fv.length - 1;

let currentGl = 0;
const arrayGl = sliderImages_gl.length - 1;

let currentGlBar = 0;
const arrayGlBar = sliderBar_gl.length - 1;


function slide_fv() {
	if(currentFv < arrayFv){
		sliderImages_fv[currentFv + 1].style.display = 'block';
		sliderImages_fv[currentFv].style.display = 'none';
		currentFv += 1;
	} else if (currentFv = arrayFv){
		sliderImages_fv[0].style.display = 'block';
		sliderImages_fv[currentFv].style.display = 'none';
		currentFv = 0;
	}
}


function slide_gl_auto() {
	if(currentGl < arrayGl){
		sliderImages_gl[currentGl + 1].style.display = 'block';
		sliderImages_gl[currentGl].style.display = 'none';
		currentGl += 1;
		sliderBar_gl[currentGlBar + 1].classList.add('active_gl');
    	sliderBar_gl[currentGlBar].classList.remove('active_gl');
    	currentGlBar += 1;
	} else if (currentGl = arrayGl){
		sliderImages_gl[0].style.display = 'block';
		sliderImages_gl[currentGl].style.display = 'none';
		currentGl = 0;
		sliderBar_gl[0].classList.add('active_gl');
    	sliderBar_gl[currentGlBar].classList.remove('active_gl');
    	currentGlBar = 0;
	}
}

// function gallerySwitch() {
// 	for(let i = 0; i < sliderBar_gl.length; i++) {
//     	sliderBar_gl[i].addEventListener('click', switchBarGl);
//   	}

//   	function switchBarGl() {
//     	document.getElementsByClassName('active_gl')[0].classList.remove('active_gl');
//     	this.classList.add('active_gl');
// 	    document.getElementsByClassName('active_gl_img')[0].classList.remove('active_gl_img');
//     	var arrayBar = Array.prototype.slice.call(sliderBar_gl);
//     	var index = arrayBar.indexOf(this);
//     	document.getElementsByClassName('slide_gl')[index].classList.add('active_gl_img');
//   	}
// }



setInterval(slide_fv, 2000);

setInterval(slide_gl_auto, 2000);

// document.addEventListener('DOMContentLoaded', gallerySwitch(), false);


