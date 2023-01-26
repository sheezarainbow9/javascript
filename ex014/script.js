function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  //var hora = 13;
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.png";
    document.body.style.background = '#e2cd4f';
  } else if (hora >= 12 && hora <= 18) {
    img.src = "tarde.png";
    document.body.style.background = '#E5BA73';
  } else {
    img.src = "noite.png";
    document.body.style.background = '#2C3333';
  }
}
