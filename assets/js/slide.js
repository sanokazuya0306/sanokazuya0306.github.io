const sliderImages_fv = document.querySelectorAll('.slide_fv');
const sliderImages_gl = document.querySelectorAll('.slide_gl');

let currentFv = 0;
const arrayFv = sliderImages_fv.length - 1;

let currentGl = 0;
const arrayGl = sliderImages_gl.length - 1;


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
	} else if (currentGl = arrayGl){
		sliderImages_gl[0].style.display = 'block';
		sliderImages_gl[currentGl].style.display = 'none';
	}
}



setInterval(slide_fv, 2000);

setInterval(slide_gl_auto, 2000);

// document.addEventListener('DOMContentLoaded', gallerySwitch(), false);


