function playSound(index){
    const element=document.querySelector(index);

    if (element && element.localName==='audio'){//colocar só element funciona igual se colocar element!=null
        element.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido.');
        //alert('Elemento não encontrado ou seletor inválido.');
    }
}
const keysList=document.querySelectorAll('.tecla');

for(let i=0;i<keysList.length;i++){//while é melhor utilizado quando não se sabe exatamente o tamanho da lista. ou esse tamanho depende de alguma outra variavel que está sendo utilizada no codigo.
    const keys=keysList[i];
    const soundType=keys.classList[1];
    const idSound= `#som_${soundType}`;
    console.log(soundType);

    keys.onclick=function(){
        playSound(idSound);
    }

    keys.onkeydown=function(e){  
        if(e.code==='Space' || e.code==='Enter'){// == compara 2 itens porém não verifica o tipo 1 == '1' vai receber como true mesmo sendo um deles um numerico e o outro uma string. === compara se os tipos também são iguais então no exemplo dado devolveria false.
            keys.classList.add('ativa');
        }
    }
    keys.onkeyup=function(){
         keys.classList.remove('ativa');
    }
    //console.log(i);imprime no console o i ao fim da funcção
}

// || signfica OR, && significa and, != significa different
