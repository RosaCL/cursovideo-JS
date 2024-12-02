let contador=0;
let input=document.getElementById('digite');
let btnAdd=document.getElementById('btn-add');
let main=document.getElementById('arealista');

function addTarefa(){
    //pegar o valor digitado no input

    let valorInput = input.value;

    //se não for vazio, nulo ou indefinido
    if((valorInput !=="") && (valorInput !==null) && (valorInput!==undefined)){
        ++contador;

        let novoitem=`<div id="${contador}" class="item">                    
                        <div class="icone" onclick="marcarTarefa(${contador})">
                            <i id="icone_${contador}" class="fa-regular fa-circle"></i>
                        </div>
                        <div class="nome" onclick="marcarTarefa(${contador})">
                        ${valorInput}
                        </div>
                        <div class="botao">
                            <button onclick="deletar(${contador})" class="delete"><i class="fa-solid fa-trash-can"></i></button>
                    
                        </div>
                </div>`;
                //adicionar novo item no main
                main.innerHTML+=novoitem;

                //zerar os campos
                input.value="";
                input.focus();
    }


}
function deletar(id){
    var tarefa=document.getElementById(id);
    tarefa.remove();

}
function marcarTarefa(id){
    var item=document.getElementById(id);
    var classe=item.getAttribute('class');

    if(classe=="item"){
        item.classList.add('clicado');

        var icone=document.getElementById('icone_'+id);
        icone.classList.remove('fa-circle');
        icone.classList.add('fa-circle-check');

        item.parentNode.appendChild(item);


    }else{
        item.classList.remove('clicado');

        var icone=document.getElementById('icone_'+id);
        icone.classList.remove('fa-circle-check');
        icone.classList.add('fa-circle');
    }

}

input.addEventListener("keyup", function(event){
    //se teclou enter
    if(event.keyCode===13){
        event.preventDefault();
        btnAdd.click();

    }
})