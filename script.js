// Seleciona todos os flashcards
const cartoes = document.querySelectorAll(".cartao");

// Permite virar os cartões com clique ou teclado
cartoes.forEach((cartao) => {
  cartao.setAttribute("tabindex", "0");
  cartao.setAttribute("role", "button");
  cartao.setAttribute("aria-label", "Virar flashcard");

  function virarCartao() {
    cartao.classList.toggle("virado");
  }

  cartao.addEventListener("click", virarCartao);

  cartao.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      virarCartao();
    }
  });
});

