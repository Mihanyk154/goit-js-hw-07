const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const formValues = {};

    formData.forEach((value, key) => {
        formValues[key] = value.trim();
    });

    if (!formValues.email || !formValues.password) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(formValues);
    form.reset();
});