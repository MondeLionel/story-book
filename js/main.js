
// GLOBAL JS

// class based nav

$('.nav-item').on('click',function() {
	console.log("clicked nav")
	$(this).addClass('active');
	$(this).siblings().removeClass('active')
})

$('.feed-links a').on('click', function(){
		$(this).addClass('active');
	$(this).siblings().removeClass('active')
})

let body = $('body');

	// $(window).load(function(){
	// 		$("body").removeClass("loading");
	// 		setTimeout(function(){
	// 			$(".loader").addClass("loader-out");
	// 			$("#feed").addClass("render")
	// 		}, 1000)
	// 		setTimeout(function(){
	// 			$(".loader").addClass("d-none");

	// 		}, 3000)
			
	// })



	// check what type of connection

let preloadVideo = true;

var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection){
	console.log(connection.effectiveType + ' connection and save data is ' +  connection.saveData + ' and connection type is ' + connection.type);
	// check for slow connection and data saving to lazyload
	if(connection.effectiveType === '2g' || connection.saveData === true){
		let preloadVideo = false;
		console.log("do not preload video")

	}
	//check for fast connection and load as much content as possible
	if(connection.downlink >= 1 || connection.effectiveType === '3g' || connection.effectiveType === '4g' ){
		let preloadVideo = true;
		console.log("preload as many videos as you can")

	}

}


// Check window width

if (window.matchMedia("(min-width: 770px)").matches){
	document.body.classList.add("desktop")
}


// ___________________________________________________________________________________________________________________ // 

/*
INDEX PAGE JAVASCRIPT
*/ 

// start preloading first video


let firstVid = $("video")[0];

if(firstVid != undefined || firstVid != null ){

firstVid.addEventListener('loadedmetadata', function(){
	if(firstVid.buffered.length === 0) return;

	let bufferedSeconds = firstVid.buffered.end(0) - firstVid.buffered.start(0);
	let bufferedTime = firstVid.buffered.start(0);
	console.log(bufferedTime);
	console.log(bufferedSeconds + ' seconds of video loaded and ready to play');
})
}



var actionSwiper = new Swiper('.swiper-container.action', {
	direction: 'horizontal',
		keyboard: {
        	enabled: true,
      	}

})


// let playVideo = function(){
// 	$("#video-1").trigger("play")
// 	console.log("clicked play")
// }

$('#play-button').on('click',function(){
	$("#video-1").trigger("play")
	console.log("play")
})



if(body.hasClass("autoplay") === true){
	// this should be a setting to autoload and autoplay videos
// or only make it available on wifi connection
	let autoPlayVideo = () => {
	console.log("autoplaying video")
	setTimeout (function(){
		$(".swiper-slide").find("video").attr("muted", "");
		$('.swiper-slide-active').find("video").trigger('play');
		$('.swiper-slide-prev').find('video').trigger('pause');
		$('.swiper-slide-next').find('video').trigger('pause');
	}, 1000)
}

actionSwiper.on('slideChange', autoPlayVideo)
}

	// $(".post-overlay").on('click', function(){
	// 	if( $(this).siblings().find('video').paused === true)
	// 		// console.log($(".post-overlay").siblings().find('video').paused)
	// 	console.log("clicked post")
	// 	// $(this).siblings().find('video').trigger('play');
	// })










