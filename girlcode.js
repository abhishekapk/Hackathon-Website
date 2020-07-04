document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $(".sidenav").sidenav();
  });
});
function makeTimer() {

			var endTime = new Date("August 26, 2020 18:00:00 PDT");			
			var endTime = (Date.parse(endTime)) / 1000;

			var now = new Date();
			var now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<p>Days</p>");
			$("#hours").html(hours + "<p>Hours</p");
			$("#minutes").html(minutes + "<p>Minutes</p>");
			$("#seconds").html(seconds + "<p>Seconds</p>");		

	}

	setInterval(function() { makeTimer(); }, 1000);