document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var thisForm = event.target;
        thisForm.querySelector('.loading').classList.add('d-block');
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.remove('d-block');

        var name = document.getElementById('contact-form-name').value || 'no set';
        var email = document.getElementById('contact-form-email').value || 'no set';
        var subject = document.getElementById('contact-form-subject').value || 'no set';
        var message = document.getElementById('contact-form-email').value || 'no set';
        
        var data = new URLSearchParams();
        data.append('entry.948421919', name);
        data.append('entry.1306392332', email);
        data.append('entry.117338935', subject);
        data.append('entry.2007474714', message);

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSd5PWOW20GGFnEveW754qWK_39qN88e-eEFZRURggZdvZNurQ/formResponse', {
            method: 'POST',
            body: data,
            mode: 'no-cors'
        }).then(function() {
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.add('d-block');
            document.getElementById('contact-form').reset();
        }).catch(function(error) {
            console.error('Error:', error);
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.error-message').innerHTML = 'Error Occurred, please try again!';
            thisForm.querySelector('.error-message').classList.add('d-block');
        });
    });
});