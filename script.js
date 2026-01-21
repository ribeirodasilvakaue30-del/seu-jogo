// Cria 100 fases automaticamente
const fases = [];
for (let i = 1; i <= 100; i++) {
  fases.push({
    texto: `Fase ${i}: Kauezinho preparou uma surpresa pra Duda 💙`,
    opcoes: ["Escolher caminho 💖", "Seguir aventura 🎮"],
    recompensa: `Mensagem fofa da fase ${i}: Te adoro muito amor 🥹`
  });
}

let faseAtual = localStorage.getItem('faseAtual') ? parseInt(localStorage.getItem('faseAtual')) : 0;

function mostrarFase() {
  if (faseAtual >= fases.length) {
    document.getElementById("faseTexto").innerText = "Fim do joguinho 😳💙";
    document.getElementById("opcoes").innerHTML = "";
    document.getElementById("proximoBtn").style.display = "none";
    localStorage.removeItem('faseAtual');
    return;
  }

  const fase = fases[faseAtual];
  const faseTexto = document.getElementById("faseTexto");
  const opcoesDiv = document.getElementById("opcoes");
  const btn = document.getElementById("proximoBtn");

  faseTexto.innerText = fase.texto;
  opcoesDiv.innerHTML = "";

  if (fase.opcoes) {
    btn.style.display = "none";
    fase.opcoes.forEach(op => {
      const btnOpcao = document.createElement("button");
      btnOpcao.innerText = op;
      btnOpcao.className = "opcao";
      btnOpcao.onclick = () => {
        alert(fase.recompensa);
        faseAtual++;
        localStorage.setItem('faseAtual', faseAtual);
        mostrarFase();
      };
      opcoesDiv.appendChild(btnOpcao);
    });
  } else {
    btn.style.display = "block";
  }
}

function proximo() {
  mostrarFase();
}

// mostra a fase atual ao carregar
mostrarFase();