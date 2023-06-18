function navMobile() {
  let botaoAbrir = document.querySelector("button#menu-mobile-abrir")
  let menuMobile = document.querySelector("div#menu-lista-links")

  if (botaoAbrir.style.display != "none") {
    botaoAbrir.style.display = "none"
    menuMobile.style.display = "block"
  } else {
    botaoAbrir.style.display = "inline-block"
    menuMobile.style.display = "none"
  }
}
