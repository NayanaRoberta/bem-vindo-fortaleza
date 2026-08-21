document.addEventListener("DOMContentLoaded", function () {
  
  // ===============================================
  // 1. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
  // ===============================================
  const formContato = document.getElementById("formContato");
  const msgFeedback = document.getElementById("mensagemFeedback");

  if (formContato) {
    formContato.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Limpa estados de mensagem
      msgFeedback.className = "feedback-msg";
      msgFeedback.textContent = "";

      // Captura dos valores
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const assunto = document.getElementById("assunto").value;
      const mensagem = document.getElementById("mensagem").value.trim();

      // Expressão Regular simples para validar formato de e-mail
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validações
      if (nome === "") {
        exibirMensagem("Por favor, preencha o seu nome.", "erro");
        return;
      }

      if (email === "" || !regexEmail.test(email)) {
        exibirMensagem("Por favor, insira um e-mail válido (ex: nome@dominio.com).", "erro");
        return;
      }

      if (assunto === "") {
        exibirMensagem("Por favor, selecione um assunto.", "erro");
        return;
      }

      if (mensagem === "") {
        exibirMensagem("Por favor, escreva a sua mensagem.", "erro");
        return;
      }

      // Se todas as validações passarem
      exibirMensagem("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.", "sucesso");
      formContato.reset(); // Limpa os campos
    });
  }

  function exibirMensagem(texto, tipo) {
    msgFeedback.textContent = texto;
    msgFeedback.classList.add(tipo);
  }

  // ===============================================
  // 2. INTERAÇÃO ADICIONAL: Botão "Voltar ao Topo"
  // ===============================================
  const btnTopo = document.createElement("button");
  btnTopo.textContent = "↑ Topo";
  btnTopo.id = "btnTopo";
  btnTopo.setAttribute("aria-label", "Voltar ao topo da página");
  
  // Estilização rápida do botão via JS
  Object.assign(btnTopo.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "none",
    padding: "10px 15px",
    backgroundColor: "#0076a3",
    color: "#fff",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    zIndex: "1000"
  });

  document.body.appendChild(btnTopo);

  // Exibir botão apenas ao rolar a página
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  // Ação de rolagem suave ao clicar
  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});