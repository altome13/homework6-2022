var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false; 
	// above does not let the video loop
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

// slow down, playbackrate
document.querySelector("#slower").addEventListener("click", function(){
	console.log("I want to slow down the video")
	video.playbackRate *= 0.95
	console.log("speed is ", video.playbackRate);
	// line above is like appending the two
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speeding up");
	video.playbackRate /= 0.95;
	console.log("Speed is ", video.playbackRate);
})

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skipping ahead!");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("Video current time is", video.currentTime)
});

// mute and unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		// FALSE indicates audio should be turned on, default
		video.muted = true; 
		// TRUE indicates the sound should be turned offfor the video
		document.querySelector("#mute").innerHTML = "Unmute";
		// console.log("Video is now muted");
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

// volume slider
document.getElementById('slider').addEventListener('change', function(){
	video.volume = this.value / 100;
	volume = video.volume * 100;
	document.getElementById("volume").innerHTML = volume + "%";
	console.log(video.volume);
});

// add old school
document.getElementById('vintage').addEventListener('click', function(){
	video.classList.add("oldSchool")
});

//remove old school
document.getElementById('orig').addEventListener('click', function(){
	video.classList.remove('oldSchool')
});
