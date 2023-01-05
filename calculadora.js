function calculaImc(peso,altura){
    let imc = peso/(altura*altura);
    return imc;
}

exports.calculaImc = calculaImc;

function retornaStatus(imc){
    let status;

    if(imc<18.5){
        status = 'Abaixo do peso';
    }else if(imc>=18.5 && imc < 24.9){
        status = 'Peso normal';
    }else if(imc >= 24.9 && imc < 39){
        status = 'Acima do peso';
    }
    else{
        status = 'Obeso';
    }

    return status;
}
exports.retornaStatus = retornaStatus;

function validaParametro(){
    if(isNaN()){
        return false;
    }
    else{
        return true;
    }
}
exports.validaParametro = validaParametro;