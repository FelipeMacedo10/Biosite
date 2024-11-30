document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("menu")
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex"
  } else {
    menu.style.display = "none"
  }
})