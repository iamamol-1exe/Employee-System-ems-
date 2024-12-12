var h1 = document.querySelector("h1");
h1.innerHTML = "amol learn ";
h1.style.color = "black";
h1.style.backgroundColor = "royalblue";

var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log("buttton is clicked");
  btn.style.backgroundColor = "blue";
});
