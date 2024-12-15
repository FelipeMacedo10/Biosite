document.addEventListener("DOMContentLoaded", () => {
  const buttonToggle = document.getElementById("button-toggle")
  if (buttonToggle) {
    buttonToggle.addEventListener("click", () => {
      const menu = document.getElementById("menu")
      menu.style.display =
        menu.style.display === "none" || menu.style.display === ""
          ? "flex"
          : "none"
    })
  } else {
    console.error('Elemento "button-toggle" não encontrado.')
  }
})