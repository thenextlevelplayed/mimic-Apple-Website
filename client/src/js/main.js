export default function(){
	// const selectElement= (element) => document.querySelector(element);

	// selectElement('.mobile-meun').addEventListener('click' ,()=>{
	// 	selectElement('header').classList.toggle('active')
	// });
	
	// 旋轉木馬
	// const item = document.querySelectorAll('.item'),
	// 	  dot = document.querySelectorAll('.dot');
	// let counter = 1;
	// slidefun(counter);
	
	// let timer = setInterval(autoSlide, 8000);
	// function autoSlide() {
	// 	counter += 1;
	// 	slidefun(counter);
	// }
	// function plusSlides(n) {
	// 	counter += n;
	// 	slidefun(counter);
	// 	resetTimer();
	// }
	// function currentSlide(n) {
	// 	counter = n;
	// 	slidefun(counter);
	// 	resetTimer();
	// }
	// function resetTimer() {
	// 	clearInterval(timer);
	// 	timer = setInterval(autoSlide, 8000);
	// }
	
	// function slidefun(n) {
		
	// 	let i;
	// 	for(i = 0;i<item.length;i++){
	// 		item[i].style.display = "none";
	// 	}
	// 	for(i = 0;i<dot.length;i++) {
	// 		dot[i].className = dot[i].className.replace(' active', '');
	// 	}
	// 	if(n > item.length){
	// 	   counter = 1;
	// 	   }
	// 	if(n < 1){
	// 	   counter = item.length;
	// 	   }
	// 	item[counter - 1].style.display = "block";
	// 	dot[counter - 1].className += " active";
	// }


}

window.onload=function(){
	const selectElement = (element) => document.querySelector(element);
	
	 selectElement('.mobile-meun').addEventListener('click' ,()=>{
	  selectElement('header').classList.toggle('active')
	 });

	 const item = document.querySelectorAll('.item'),
	 dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
   counter += 1;
   slidefun(counter);
}
function plusSlides(n) {
   counter += n;
   slidefun(counter);
   resetTimer();
}
function currentSlide(n) {
   counter = n;
   slidefun(counter);
   resetTimer();
}
function resetTimer() {
   clearInterval(timer);
   timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
   
   let i;
   for(i = 0;i<item.length;i++){
	   item[i].style.display = "none";
   }
   for(i = 0;i<dot.length;i++) {
	   dot[i].className = dot[i].className.replace(' active', '');
   }
   if(n > item.length){
	  counter = 1;
	  }
   if(n < 1){
	  counter = item.length;
	  }
   item[counter - 1].style.display = "block";
   dot[counter - 1].className += " active";
}
	}

