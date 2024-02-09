function startCountdown(endDate) {
  var timerInterval = setInterval(function() {
    var now = new Date().getTime();
    var distance = endDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

  
    if (distance < 0) {
      clearInterval(timerInterval);
      document.getElementById("CountDown").innerHTML = "Countdown Finished!";
    }
  }, 1000); 
}


var endDate = new Date();
endDate.setDate(endDate.getDate() + 10); 


startCountdown(endDate);