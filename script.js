var about = document.getElementById("about-button");
var buttonHome = document.getElementById("button-home");

about.addEventListener("click", function () {
  removeClassActive();
});

function removeClassActive() {

  buttonHome.classList.remove("active");
  about.classList.add("active");


};

comsole.log(videos);