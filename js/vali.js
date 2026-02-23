let campo = document.querySelectorAll('.required');
let spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function validateName() {
    if(campo[0].value.length < 3){

        spans[0].style.display = 'block';
        campo[0].style.border = '2px solid rgb(202, 11, 11)';
        console.log("O nome deve ter no minímo 3 caracteres");
        return false;
    }else{
        spans[0].style.display = 'none';
        campo[0].style.border = 'none';
        console.log("Nome Válido");
        return true; 
    }

}
function EmailValidate() {
    if(!emailRegex.test(campo[1].value)){

        spans[1].style.display = 'block';
        campo[1].style.border = '2px solid rgb(202, 11, 11)';
        console.log("Digite um email válido");
        return false;
    }else{
        spans[1].style.display = 'none';
        campo[1].style.border = 'none';
        console.log("Email Válido");
        return true;
    }

}
function validateTel() {
    if(campo[2].value.length < 14){
        spans[2].style.display = 'block';
        campo[2].style.border = '2px solid rgb(202, 11, 11)';
        console.log("O telefone deve ter 11 digitos");
        return false;
    }else{
        spans[2].style.display = 'none';
        campo[2].style.border = 'none';
        console.log("Tel Válido");
        return true;
    }

}
function validateCPF() {
    if(campo[3].value.length < 14){
        spans[3].style.display = 'block';
        campo[3].style.border = '2px solid rgb(202, 11, 11)';
        console.log("O CPF deve ter 11 digitos");
        return false;
    }else{
        spans[3].style.display = 'none';
        campo[3].style.border = 'none';
        console.log("CPF Válido");
        return true;
    }

}
function validateRg() {
    if(campo[4].value.length < 12){
        spans[4].style.display = 'block';
        campo[4].style.border = '2px solid rgb(202, 11, 11)';
        console.log("O RG deve ter 9 digitos");
        return false;
    }else{
        spans[4].style.display = 'none';
        campo[4].style.border = 'none';
        console.log("RG Válido");
        return true;
    }

}
function validateCep() {
    if(campo[5].value.length < 9){
        spans[5].style.display = 'block';
        campo[5].style.border = '2px solid rgb(202, 11, 11)';
        console.log("O CEP deve ter 8 digitos");
        return false;
    }else{
        spans[5].style.display = 'none';
        campo[5].style.border = 'none';
        console.log("CEP Válido");
        return true;
    }
}
function validateNr() {
    if(campo[6].value.length < 1){
        spans[6].style.display = 'block';
        campo[6].style.border = '2px solid rgb(202, 11, 11)';
        console.log("O Número não é valido");
        return false;
    }else{
        spans[6].style.display = 'none';
        campo[6].style.border = 'none';
        console.log("Número Válido");
        return true;
    }

}
function validateAss() {
    if(campo[7].value.length < 1){
        spans[7].style.display = 'block';
        campo[7].style.border = '2px solid rgb(202, 11, 11)';
        console.log("Insira um assunto");
        return false;
    }else{
        spans[7].style.display = 'none';
        campo[7].style.border = 'none';
        console.log("Assunto Válido");
        return true;
    }

}
function validateMsg() {
    if(campo[8].value.length < 1){
        spans[8].style.display = 'block';
        campo[8].style.border = '2px solid rgb(202, 11, 11)';
        console.log("Insira uma mensagem");
        return false;
    }else{
        spans[8].style.display = 'none';
        campo[8].style.border = 'none';
        console.log("Mensagem Válida");
        return true;
    }

}
function validateSenha() {
    if(campo[9].value.length < 3){
        spans[9].style.display = 'block';
        campo[9].style.border = '2px solid rgb(202, 11, 11)';
        console.log("A senha deve ter no minimo 3 dígitos");
        return false;
    }else{
        spans[9].style.display = 'none';
        campo[9].style.border = 'none';
        console.log("Senha Válida");
        return true;
    }

}