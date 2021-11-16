var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slowdown").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate = video.playbackRate - (5/100);
	video.play();
});

document.querySelector("#speedup").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate = video.playbackRate + (5/100);
	video.play();
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime += 15
	}
	console.log("Current video time is: " + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute"
	}
	else{
		video.muted=true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value/100;
	document.getElementById("volume").innerHTML=this.value+"%"
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add('oldSchool');
	console.log("Video style set to 'Old School'")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
	console.log("Video style set to 'Original'")
});
