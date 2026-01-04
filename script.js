function adicionarConvidado() {
  const nome = document.getElementById("nomeConvidado").value;
  if (nome === "") return;

  const lista = document.getElementById("listaConvidados");
  const li = document.createElement("li");
  li.textContent = nome;
  lista.appendChild(li);

  document.getElementById("nomeConvidado").value = "";
}

function confirmarPresenca() {
  const nome = document.getElementById("nomeRsvp").value;
  const presenca = document.getElementById("presenca").value;
  if (nome === "") return;

  const lista = document.getElementById("listaRsvp");
  const li = document.createElement("li");
  li.textContent = `${nome} - ${presenca}`;
  lista.appendChild(li);

  document.getElementById("nomeRsvp").value = "";
}
