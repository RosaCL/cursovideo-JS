// document.getElementById("texto").innerHTML="Meu primeiro texto <b>JS!</b>!";
// document.write('Oi escrito com docmet.write');
// alert(10+5);
// console.log("Oi isso é um console.log");

// let a=5;b=6;c=7;

// function minhafuncao(){
//     document.write(5+5);
//     document.write(5+5);
//     document.write(5+5);
//     document.write(5+5);

// }

// var nome, sobrenome, nomeCompleto;
// nome= "Rosa";
// sobrenome = "Chagas"
// nomeCompleto=nome+ " "+sobrenome;
// document.getElementById("texto").innerHTML=nomeCompleto;

// var valor1,valor2,total;
// valor1=5;
// valor2=2;
// total=--valor1;
// alert (total);

// function soma(valor1,valor2){
//     return valor1+valor2;
// }
// function realParaDolar(real, cotacaoDolar){
//     return real*cotacaoDolar;
// }
// var valorReal=7.89;
// var cotacao=5.08;
// var total=realParaDolar(valorReal,cotacao);
// alert ("O valor em real é R$: "+valorReal+ " o valor em dólar U$ é: "+ total);
// const carro={
//     marca:"ford", 
//     modelo:"ka", 
//     ano: 2015,
//     placa:"ABC-1234",
//     buzina: function(){alert('Biiiiiiiiiiiiiiiiii')},
//     completo: function(){
//         return "A marca é "+this.marca+" e o modeloe é: "+ this.modelo
//     }
// };
// console.log(carro.completo());
// function eventoClick(){
//     // alert('Aciounou um evento click');
//     document.body.style.backgroundColor="white";
// }
// function eventodbClick(){
//     alert('envento de click duplo');
// }
// function viraVerde(){
//     let div =document.getElementById("teste");
//     div.style.backgroundColor="green";
// }
// function viraRosa(){
//     let div =document.getElementById("teste");
//     div.style.backgroundColor="blueviolet";
// }
// // function adcionaTexto(){
// //     let p=document.getElementById("teste");
// //     p.append('O mouse moveu');

// // }
// function limpa(){
//     document.getElementById("espaco").value="";
// }

// function mudou(){
//     console.log('mudou')
// }
// function presionatecla(){
//     let input=document.getElementById("espaco").value;
//     console.log(input);
// }

// const lista = ["arroz", "feijão", "macarrão", "leite"];
// let x=lista[3];
// alert(x);

const pessoa =["Rosa ", "Chagas ", 38, " estudante"];
// pessoa.push(" brasileira") ; //adciona
// document.getElementById("teste").innerHTML=pessoa.join("#")
// pessoa.pop(); //remover ultimo item da matriz
// pessoa.shift(); //remover o primeiro item da matriz
pessoa.unshift("Maria ") //adciona item na primeira posição e altera o indice dos demais
delete.pessoa[0]; // exclui item mis deixa matriz com vazio
document.getElementById("teste").innerHTML=pessoa;