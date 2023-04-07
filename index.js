let modes = document.getElementById("mode");
let modewhite = document.getElementsByClassName("mode-white");
let modeblack = document.getElementsByClassName("mode-black");
let projectcontentR = document.getElementsByClassName("project-content-right");
console.log(projectcontentR);
console.log(modewhite + modeblack);
const root = document.documentElement;

var condition = false;
modewhite[0].style.display = "none";
modes.addEventListener("click", function (e) {
  e.preventDefault();
  if (condition == true) {
    lightmodeon();
    condition = false;
    console.log("hello");
  } else {
    condition = true;
    darkmodeon();
  }
});
function darkmodeon() {
  root.style.setProperty("--black", "#fff");
  root.style.setProperty("--light-gray", "#111");
  root.style.setProperty("--text-gray", "#fff");
  root.style.setProperty("--medium-gray", "#111");
  root.style.setProperty("--orange", "#fff");
  root.style.setProperty("--white", "#111");
  root.style.setProperty("--button-shadow", "#fff");
  root.style.setProperty("--card-color", "#fff");
  root.style.setProperty("--contactusbackground", "#111");
  root.style.setProperty("--formfieldcolor", "#fff");
  root.style.setProperty("--footer-background", "#111");
  modewhite[0].style.display = "block";
  modeblack[0].style.display = "none";
  console.log("apple");
}

function lightmodeon() {
  root.style.setProperty("--black", "#111");
  root.style.setProperty("--light-gray", "#fafafa");
  root.style.setProperty("--text-gray", "#343d68");
  root.style.setProperty("--medium-gray", "rgb(231,231,231)");
  root.style.setProperty("--orange", "#e84949");
  root.style.setProperty("--white", "#fff");
  root.style.setProperty("--contactusbackground", "rgb(231,231,231)");
  root.style.setProperty("--formfieldcolor", "#1f1f1f");
  root.style.setProperty("--footer-background", "#343d68");
  console.log("icecream");
  modeblack[0].style.display = "block";
  modewhite[0].style.display = "none";
}
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    // document.body.style.backgroundColor = "yellow";
    for (let i = 0; i < projectcontentR.length; i++) {
      projectcontentR[i].classList.add("project-content-left");
      projectcontentR[i].classList.remove("project-content-right");
    }
    // projectcontentR[0].classList.add("project-content-left");
    // projectcontentR[0].classList.remove("project-content-right");
  }
  // else {
  //   document.body.style.backgroundColor = "pink";
  // }
}

var x = window.matchMedia("(max-width: 480px)");
myFunction(x); // Call listener function at run time
// x.addEventListener(myFunction);
