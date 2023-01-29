function contar() {
  let inicio = document.getElementById("txtini");
  let fim = document.getElementById("txtfim");
  let passo = document.getElementById("txtpasso");
  let res = document.getElementById("res");
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "Impossível contar!";
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo inválido! Considerando PASSO 1.");
      p = 1;
    }
    if (i < f) {
      // Contagem crescente
      for (let cont = i; cont <= f; cont += p) {
        res.innerHTML += ` ${cont} \u{1F449}`; //  \u{1F449} - emoji.
      }
    } else {
      // Contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
