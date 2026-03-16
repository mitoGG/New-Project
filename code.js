// Dentro do evento de envio do formulário, após a validação de campos
let recaptchaResponse = grecaptcha.getResponse();
if (!recaptchaResponse) {
    alert("Por favor, complete o reCAPTCHA.");
    event.preventDefault();
}