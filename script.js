var titulo = document.querySelector(".titulo");
titulo.textContent = "Financeiro Controle";

var receitas = document.querySelectorAll(".receita");
console.log(receitas);
//da pra fazer com while e com o for
//registro= as 5 linhas da tabela!!!!
//var registro=0;(while)
var saldo=0.0;

//while(registro < receitas.length){
    for(var registro=0;registro<receitas.length;registro++){
    var receita=receitas[registro];
    var tdValor=receita.querySelector(".info-valor");
    var tdSaldo=receita.querySelector(".info-saldo");
    var valor=parseFloat(tdValor.textContent);
    saldo+=valor;//saldo=saldo+valor
    tdSaldo.textContent=saldo.toFixed(2);
    //toFixed=tanto de casas decimais!!!
    if(saldo<0){
        tdSaldo.classList.add("receita-negativa");
        //tirei o css e coloquei propriedade do javascript(no css tem a classe)
        //pegar classe do css e mudar p js
        
    }
    //registro++;(while) registro=registro+1
    //soma 1 na variavel(++)

    
    
}




var botao=document.querySelector("#adicionar-receita");
botao.addEventListener("click", function(evento){
    evento.preventDefault();
    var form=document.formulario;
    var descricao=form.descricao.value;
    var categoria=form.categoria.value;
    var data=form.data.value;
    var valor=parseFloat(form.valor.value);
    var msgErros=document.querySelector(".erros");
    var erros=[];
 
    if(descricao.length<=0){
        erros.push("A descricao é obrigatoria.\n");
    }

    if(categoria.length<=0){
        erros.push("A categoria é obrigatoria.\n");
    }
    if(data.length<=0){
        erros.push("A data é obrigatoria \n");
    }
    
    if(isNaN(valor)){
        erros.push("O valor é obrigatorio \n");
    }
    else{
        if(valor==0){
            erros.push("O valor deve ser diferente de zero(0) \n");
        }
    }
    if(erros.length>0){
        limparErros(msgErros);
        //for(var erro=0;erro<erros.length;erro++){
            //foreach(outra maneira de usar o FOR)

           erros.forEach(function(erro){
             var li=document.createElement("li");
             li.textContent=erro;
             msgErros.appendChild(li);
           //criando o li (filho)do (ul)
        });
        return;
        //da return sai da minha funcao 
    }
    
    
     //adicionar nova receita e passar essas informacoes para uma nova li na tabela
       
     //pegar a mae de tudo que é  a tabela.
     var tabela=document.querySelector("#tabela-receitas");
     //criar o tr
     var tr=document.createElement("tr");
     //criar os td
     var tdDescricao=document.createElement("td");
     var tdCategoria=document.createElement("td");
     var tdData=document.createElement("td");
     var tdValor=document.createElement("td");
     var tdSaldo=document.createElement("td");

     tdDescricao.textContent=descricao;
     tdDescricao.classList.add("info-descricao");
     tr.appendChild(tdDescricao);
     tdCategoria.textContent=categoria;
     tdCategoria.classList.add("info-categoria");
     tr.appendChild(tdCategoria);
     tdData.textContent=data;
     tdData.classList.add("info-data");
     tr.appendChild(tdData);
     tdValor.textContent=valor;
     tdValor.classList.add("info-valor");
     tr.appendChild(tdValor);

     var receitas=document.querySelectorAll(".receita");
     var saldoAnterior=parseFloat(receitas[receitas.length -1].querySelector(".info-saldo").textContent);
     //(-1)é o ultimo valor de saldo pq a lista comeca com zero
     console.log(saldoAnterior);
     console.log(valor);
     var saldo=saldoAnterior+valor;
     console.log(saldo);
     tdSaldo.textContent=saldo.toFixed(2);
     tdSaldo.classList.add("info-saldo");
     tr.appendChild(tdSaldo);

     if(saldo<0){
         tdSaldo.classList.add("receita-negativa");

     }
     tr.classList.add("receita");
     tabela.appendChild(tr);

    limparErros(msgErros);
    formulario.reset();

});

function limparErros(erros){
    erros.innerHTML="";

}
 











