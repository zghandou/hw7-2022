var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Auto play is set to", video.autoplay)
	video.loop = false;
	console.log("Loop is set to",video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
	
 });
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()

});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.9;
	console.log("The current speed is " + video.playbackRate)
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= .9;
	console.log("The current speed is " + video.playbackRate)
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime +=10

	if (video.currentTime >= video.duration)
		video.currentTime = 0;
		console.log("Video current time is", video.currentTime)

});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("Umute")
        video.muted = false
		this.innerHTML = "Mute"
	}	
    else{
			console.log("Mute")
			video.muted = true
			this.innerHTML = "Unmute"
	}
});
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value / 100
	document.querySelector("#volume").innerHTML = slider.value + "%"
	console.log("The current value is",video.volume)
			
});
document.querySelector("#vintage").addEventListener("click", function() {
     document.getElementById("player1").classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool")
});
