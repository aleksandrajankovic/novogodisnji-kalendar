// target current day, disable future days and days without dates

var d = new Date();
var todaysDate = d.getDate();
var target = $("#calendar .week .day .date");

target.each(function () {
  var day = $(this).html();
  if (todaysDate == day) {
    $(this).addClass("today");
  }
  if (todaysDate < day) {
    $(this).parent().addClass("future");
    $(this).parent().addClass("gift");
  }
  if (todaysDate >= day) {
    $(this).parent().addClass("past");
    if ($(this).siblings(".surprise").html().trim() !== "") {
      $(this).parent().addClass("gift-open");
    }
  }
});

// handle clicks on days

$(".day").click(function () {
  if ($(this).hasClass("future")) {
    return; // Ne radi ništa ako je budući dan
  }

  if ($(this).hasClass("past")) {
    var content = $(this).children(".surprise").html();

    // Provera da li postoji sadržaj pre nego što se otvoriti popup
    if (content.trim() !== "") {
      $("#modal").addClass("active");
      $("#modal .wrapper .content .box").html("");
      $("#modal .wrapper .content .box").html(content);
    } else {
      console.log("Nema dostupnog sadržaja za ovaj dan.");
    }
  }
});


// close modal

$("#modal").click(function (event) {
  if ($(event.target).closest('.wrapper').length === 0) {
    $(this).removeClass("active");
  }
});

$(document).keyup(function (e) {
  if (e.key === "Escape") {
    $("#modal").removeClass("active");
  }
});


$(".wrapper").click(function () {
  $("#modal").removeClass("active");
});



// snow effect customizations

const snow = ['❄', '❅', '❆'];
const colors = ['#fff', '#fff', '#fff', '#fff', '#eee'];
const flakes = 20;
const container = document.querySelector('.snow');
const containerWidth = container?.clientWidth;
const snowflakes = [];
for (let i = 0; i < flakes; i++) {
  const flake = document.createElement('div');
  flake.innerHTML = snow[Math.floor(Math.random() * snow.length)];
  flake.classList.add('snowflake');
  flake.style.position = 'absolute';
  flake.style.left = `${Math.random() * containerWidth}px`;
  flake.style.fontSize = `${Math.floor(Math.random() * 30) + 10}px`;
  flake.style.color = colors[Math.floor(Math.random() * colors.length)];
  flake.style.animationDelay = `${Math.random() * 12}s`;
  container.appendChild(flake);
  snowflakes.push(flake);
}

$(document).snowfall({
  flakeCount: 100,
  collection: ".collectonme",
  maxSpeed: 10,
});
