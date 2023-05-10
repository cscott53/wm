"use strict";
console.log(document.getElementsByTagName("form").width);
// Function to show date and time
function showClock() {
    var today = new Date();
    var date = today.toLocaleDateString().toString(); // Converting a number to a string
    var hours = (today.getHours() % 12).toString();
    var minutes = today.getMinutes();
    var minutesStr = minutes.toString();
    if (minutes <= 9) {
        minutesStr = "0" + minutesStr;
    }
    minutes = minutesStr;
    var time = hours + ":" + minutes + " ";
    if (today.getHours() <= 12) {
        time += "AM"
    } else {
        time += "PM"
    }
    document.getElementById("date-and-time").innerHTML = date + "&nbsp;" + time + "<br />";
}
showClock();
setInterval(showClock, 15000); // Running function at specified interval
function hover(rating) {
    var star1 = document.getElementById("star1");
    var star2 = document.getElementById("star2");
    var star3 = document.getElementById("star3");
    var star4 = document.getElementById("star4");
    var star5 = document.getElementById("star5");
    if (star1.matches(":hover")) {
        star1.src = "selected_star.png";
    } else if(star2.matches(":hover")) {
        star1.src = "selected_star.png";
        star2.src = "selected_star.png";
    } else if(star3.matches(":hover")) {
        star1.src = "selected_star.png";
        star2.src = "selected_star.png";
        star3.src = "selected_star.png";
    } else if(star4.matches(":hover")) {
        star1.src = "selected_star.png";
        star2.src = "selected_star.png";
        star3.src = "selected_star.png";
        star4.src = "selected_star.png";
    } else if(star5.matches(":hover")) {
        star1.src = "selected_star.png";
        star2.src = "selected_star.png";
        star3.src = "selected_star.png";
        star4.src = "selected_star.png";
        star5.src = "selected_star.png";
    } else {
        star1.src = "deselected_star.png";
        star2.src = "deselected_star.png";
        star3.src = "deselected_star.png";
        star4.src = "deselected_star.png";
        star5.src = "deselected_star.png";
    }
}
var hovering = setInterval(hover, 1000);
var rating = 0
var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");
star1.onclick = () => {
    rating = 1;
}
star2.onclick = () => {
    rating = 2;
}
star3.onclick = () => {
    rating = 3;
}
star4.onclick = () => {
    rating = 4;
}
star5.onclick = () => {
    rating = 5;
}
var starRating = setInterval(() => {
    if (rating == 1) {
        star1.src = "selected_star.png";
    } else if (rating == 2) {
        star1.src = "selected_star.png";
        star2.src = "selected_star.png";
    } else if (rating == 3) {
        star1.src = "selected_star.png";
        star2.src = "selected_star.png";
        star3.src = "selected_star.png";
    } else if (rating == 4) {
        star1.src = "selected_star.png";
        star2.src = "selected_star.png";
        star3.src = "selected_star.png";
        star4.src = "selected_star.png";
    } else if (rating == 5) {
        star1.src = "selected_star.png";
        star2.src = "selected_star.png";
        star3.src = "selected_star.png";
        star4.src = "selected_star.png";
        star5.src = "selected_star.png";
    }
}, 1000);
var button = document.getElementById("rate");
button.onclick = () => {
    clearInterval(starRating);
    clearInterval(hovering);
};
var submit = document.getElementById("submit");
// Countdown function
function countdown() {
    var x = 10;
    var cd = setInterval(() => {
        if (x != 0) {
            x--;
            window.alert(x); // Sending an alert
        } else {
            return;
        }
    }, 1000);
}
function submitForm() {
    rating *= 2;
    var visitsPerMonth = Math.round(document.getElementById("frequency").value / 3.1); // Math 
    var scale = document.getElementById("slider").value;
    var averageRating = Math.round((rating + visitsPerMonth + scale)/3);
    return averageRating
}
var finalRating;
var submitted = false;
submit.onclick = () => {
    countdown();
    finalRating = submitForm();
    submitted = true;
};
if (submitted) {
    console.log(finalRating);
    window.alert("Thank you for submitting the form")
}
