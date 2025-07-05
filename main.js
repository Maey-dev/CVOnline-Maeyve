document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const mensagemInput = document.getElementById("mensagem");

  // Alerta com o nome da pessoa ao enviar o formulário
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = nomeInput.value.trim();

    if (nome === "") {
      alert("Por favor, preencha seu nome.");
      return;
    }

    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);

    form.reset();
    atualizarContador();
  });

  // Estilo ao focar nos inputs
  [nomeInput, emailInput, mensagemInput].forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.outline = "2px solid #c77dff";
    });

    input.addEventListener("blur", () => {
      input.style.outline = "none";
    });
  });

  // Contador de caracteres
  const contador = document.createElement("small");
  contador.style.display = "block";
  contador.style.textAlign = "right";
  contador.style.marginTop = "-0.5rem";
  contador.style.marginBottom = "1rem";
  contador.style.color = "#999";
  mensagemInput.parentNode.insertBefore(contador, mensagemInput.nextSibling);

  function atualizarContador() {
    const comprimento = mensagemInput.value.length;
    contador.textContent = `${comprimento}/500 caracteres`;
  }

  mensagemInput.setAttribute("maxlength", "500");
  mensagemInput.addEventListener("input", atualizarContador);
  atualizarContador();
});
