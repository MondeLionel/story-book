// VIDEO JS BECAUSE IM TOO SHITTY TO WRITE A REASONABLE LOOP


var body = document.getElementsByTagName("body");
window.onload = function(){

let playbtn1 = document.getElementById('playbutton1');
let playbtn2 = document.getElementById('playbutton2');
let playbtn3 = document.getElementById('playbutton3');
let playbtn4 = document.getElementById('playbutton4');
let playbtn5 = document.getElementById('playbutton5');
let playbtn6 = document.getElementById('playbutton6');
let playbtn7 = document.getElementById('playbutton7');
let playbtn8 = document.getElementById('playbutton8');
let playbtn9 = document.getElementById('playbutton9');
let playbtn10 = document.getElementById('playbutton10');
let playbtn11 = document.getElementById('playbutton11');



playbtn1.addEventListener('click', function(){
	vid_1.ready(function(){
	vid_1.play();

	console.log()
})
})

playbtn2.addEventListener('click', function(){
	vid_2.ready(function(){
	vid_2.play();
	console.log(vid_2)
})
})

playbtn3.addEventListener('click', function(){
	vid_3.ready(function(){
		if (vid_3.isReady_ === true){
			vid_3.play();
			console.log(vid_3.isReady_);
			body.classList.add("vp")
		}else{
			console.log("")
		}
	
})
})

playbtn4.addEventListener('click', function(){
	vid_4.ready(function(){
	vid_4.play();
	console.log(vid_4)
})
})

playbtn5.addEventListener('click', function(){
	vid_5.ready(function(){
	vid_5.play();
	console.log(vid_5)
})
})

playbtn6.addEventListener('click', function(){
	vid_6.ready(function(){
	vid_6.play();
	console.log(vid_6)
})
})

playbtn7.addEventListener('click', function(){
	vid_7.ready(function(){
	vid_7.play();
	console.log(vid_7)
})
})

playbtn8.addEventListener('click', function(){
	vid_8.ready(function(){
	vid_8.play();
	console.log(vid_8)
})
})

playbtn9.addEventListener('click', function(){
	vid_9.ready(function(){
	vid_9.play();
	console.log(vid_9)
})
})


playbtn10.addEventListener('click', function(){
	vid_10.ready(function(){
	vid_10.play();
	console.log(vid_10)
})
})

playbtn11.addEventListener('click', function(){
	vid_11.ready(function(){
	vid_11.play();
	console.log(vid_11)
})
})



}


let vid_1 = videojs('favela',{preload: 'auto'});
let vid_2 = videojs('feels',{preload: 'auto'});
let vid_3 = videojs('schwepps',{preload: 'auto'});
let vid_4 = videojs('phesheya',{preload: 'auto'});
let vid_5 = videojs('bee',{preload: 'auto'});
let vid_6 = videojs('homii',{preload: 'auto'});
let vid_7 = videojs('dsff',{preload: 'auto'});
let vid_8 = videojs('nostalgia',{preload: 'auto'});
let vid_9 = videojs('oxy',{preload: 'auto'});
let vid_10 = videojs('butifly',{preload: 'auto'});
let vid_11 = videojs('pop',{preload: 'auto'});


// check if modal is open
// if the slide has active class, find video and play it
// if slide doesn't have active class stop the video
// check if funions

if (body[0].classList.contains("modal-open")) {
	console.log("modal opened")
}

