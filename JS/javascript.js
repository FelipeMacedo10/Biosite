const buttonToggle = document.getElementById("button-toggle")
buttonToggle.addEventListener("click", () => {
  const menu = document.getElementById("menu")
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex"
  } else {
    menu.style.display = "none"
  }
})