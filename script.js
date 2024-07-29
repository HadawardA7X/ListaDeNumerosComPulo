function verificar() {
  let inicio = Number(document.querySelector("input#txtinicio").value);
  let fim = Number(document.querySelector("input#txtfim").value);
  let passo = Number(document.querySelector("input#txtpasso").value);
  let res = document.querySelector("div#res");

  if (inicio == "" || fim == "") {
    alert("[ERRO], preencha os campos vazios");
    return;
  } else if (passo <= 0) {
    alert("[ERRO] O passo deve ser maior do que 0");
    return;
  }

  let numeros = [];
  for (i = inicio; i <= fim; i += passo) {
    numeros.push(i);
  }
  res.innerHTML = numeros.join("👉 ");
}
