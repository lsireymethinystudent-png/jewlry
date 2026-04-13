const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            document.getElementById('successAlert').classList.remove('d-none');
            form.reset();
        }

        form.classList.add('was-validated');
    });
}