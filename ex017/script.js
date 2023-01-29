function tabuada() {
  let num = document.getElementById("txtnum");
  let tab = document.getElementById("seltab");

  if (num.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    let cont = 1;
    tab.innerHTML = ""; // limpar a tabuada para a próxima rodada.
    while (cont <= 10) {
      let item = document.createElement("option"); // criando o option de maneira dinâmica.
      item.text = `${n} x ${cont} = ${n * cont}`;
      //item.value = `tab${c}`; - para o JS não faz tanto sentido, somente para outras linguagens.
      tab.appendChild(item);
      cont++;
    }
  }
}
