var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

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

	if (video.currentTime  > video.duration)
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

document.querySelector("#vintage").addEventListener("click", function() {
     document.getElementById("player1").classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove("oldSchool")
});
