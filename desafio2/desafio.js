const keysList=document.querySelectorAll('input[type=button]');//faz uma lista com todos os input encontrados com o tipo 'button'
const inputTel=document.querySelector('input[type=tel]');

for(i=0;i<keysList.length;i++){
    const key=keysList[i];
    key.onclick=function(){
        inputTel.value=inputTel.value+key.value; //value vai mostrar o valor do que foi guardado nas listas
    }
}