 document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
	var polosa = document.getElementById('polosa');
	left = left - 128;
	if (left < -512) {
		left = 0;
            }
	polosa.style.left = left +'px';
}

document.getElementById('slider-right').onclick = sliderRight;
var right = 0;

function sliderRight(){
	var polosa = document.getElementById('polosa');
	right = right - 128;
	if(right > 512){
		right = 0;
	}
	polosa.style.right = right + 'px';
}