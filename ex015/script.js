function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.querySelector("input#txtano");
  var res = document.querySelector("div#res");
  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente.");
  } else {
    var formGen = document.getElementsByName("radgen");
    var idade = ano - Number(formAno.value);
    //res.innerHTML = `Idade calculada: ${idade}` - linha só para teste.
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formGen[0].checked) {
      genero = "Masculino";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "criançahomem.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "homemjovem.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "homemjovem.png");
      } else {
        // idoso
        img.setAttribute("src", "idosohomem.png");
      }
    } else if (formGen[1].checked) {
      genero = "Feminino";
      if (idade >= 0 && idade < 10) {
        // criança
        img.setAttribute("src", "criançamulher.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "mulherjovem.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "mulherjovem.png");
      } else {
        // idoso
        img.setAttribute("src", "mulheridosa.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
