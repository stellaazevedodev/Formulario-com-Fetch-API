
let validarFormulario = (event) => {

    //console.log("ok");
    event.preventDefault(); // Impede o envio do formulário

    // Variáveis para armazenar o estado de validação
    let nameValid = validateName();
    let emailValid = EmailValidate();
    let telValid = validateTel();
    let cpfValid = validateCPF();
    let rgValid = validateRg();
    let cepValid = validateCep();
    let nrValid = validateNr();
    let assValid = validateAss();
    let msgValid = validateMsg();
    let senhaValid = validateSenha();

    if (nameValid && emailValid && telValid && cpfValid && rgValid && cepValid && nrValid && assValid && msgValid && senhaValid) {
        let form = document.getElementById("frm");
        form.action = "php/proc.php";
        form.method = "post";
        form.submit();
    }
};
