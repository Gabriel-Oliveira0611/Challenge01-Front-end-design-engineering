document.addEventListener("DOMContentLoaded", () => {
    const perguntas = document.querySelectorAll(".faq-pergunta");

    perguntas.forEach(pergunta => {
        pergunta.addEventListener("click", () => {
            // Pega o card completo (o pai do botão)
            const item = pergunta.parentElement;

            // Alterna a classe 'active' no card clicado
            item.classList.toggle("active");
        });
    });
});