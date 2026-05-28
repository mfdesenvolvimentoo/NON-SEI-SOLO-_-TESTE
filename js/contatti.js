/*
  =====================================================
  CONTATTI.JS
  Funções específicas da página Contatti
  =====================================================
*/

console.log("contatti.js carregado com sucesso.");


/*
  FORMULÁRIO DE CONTATO

  Esta parte impede que o formulário recarregue a página ao clicar em enviar.
  Por enquanto, ele apenas mostra uma mensagem no console.

  Depois podemos fazer esse botão:
  - abrir uma conversa no WhatsApp;
  - enviar para e-mail;
  - integrar com algum serviço externo;
  - conectar com backend.
*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Formulário enviado visualmente. Integração futura será adicionada.");
    alert("Mensagem preparada. Em breve este formulário será conectado.");
  });
}