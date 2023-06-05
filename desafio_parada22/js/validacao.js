function validacao(){

    let nome = document.getElementById ("i_nome");
    let sobrenome = document.getElementById ("i_sobrenome");
    let data = document.getElementById ("i_data");
    let senha = document.getElementById ("i_senha");
    let con_Senha = document.getElementById ("i_conSenha");

    input_style(nome, "#f45456", "#008000");
    input_style(sobrenome, "#f45456", "#008000");
    input_style(data, "#f45456", "#008000");
    input_style(senha, "#f45456", "#008000");
    input_style(con_Senha, "#f45456", "#008000");

}

function input_style(input, cor_1, cor_2){

    if(!input.checkValidity()){
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `1px solid ${cor_2}`;
    }

}