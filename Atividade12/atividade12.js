const validateForm = () => {
    const form = document.forms['form'];
    const nome = form.elements[0];
    const email = form.elements.email;
    const comentario = form.elements.comentario;

    if (!nome.value || nome.value.length < 12) {
        alert('Nome precisa ter no mínimo 12 caracteres!');
        nome.focus();
        return false;
    };

    if (!email.value || !email.includes('@') || !email.includes('.')) {
        alert('Email incorreto!');
        email.focus();
        return false;
    };

    if (!comentario.value || comentario.value.length < 30) {
        alert('Comentario precisa ter no mínimo 30 caracteres!');
        comentario.focus();
        return false;
    };

    return true;
}

const survey = (firstTime) => alert(firstTime ? 'Volte sempre!' : 'Que bom te ver novamente por aqui!');