document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('send-button').addEventListener('click', function(event) {
        event.preventDefault();

        const form = document.getElementById('contact-form');
        const formData = new FormData(form);

        const serviceID = 'service_9iamq8f';
        const templateID = 'template_h4g81t3';

        emailjs.sendForm(serviceID, templateID, form)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message envoyé avec succès!');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Échec de l\'envoi du message.');
            });
    });
});