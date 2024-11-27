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

// const pessoa =["Rosa ", "Chagas ", 38, " estudante"];
// // pessoa.push(" brasileira") ; //adciona
// // document.getElementById("teste").innerHTML=pessoa.join("#")
// // pessoa.pop(); //remover ultimo item da matriz
// // pessoa.shift(); //remover o primeiro item da matriz
// pessoa.unshift("Maria ") //adciona item na primeira posição e altera o indice dos demais
// delete.pessoa[0]; // exclui item mis deixa matriz com vazio
// document.getElementById("teste").innerHTML=pessoa;

// var luz="of";

// if (luz=="on"){
//     alert('Luz acesa')
// }else{
//     alert ('Luz apagada')
// }

// function verificaCor(){
//     let cor = document.getElementById("cor").value;
//     switch(cor){
//         case "azul": 
//         document.body.style.backgroundColor="blue";
//             break;
//         case "vermelho":
//             document.body.style.backgroundColor="red";
//             break;
//         case "amarelo":
//             document.body.style.backgroundColor="yellow";
//             break;
//         case "verde":
//             document.body.style.backgroundColor="green";
//             break;
//         default:
//             document.getElementById("testou").innerHTML="Nenhuma cor dispinível" 

    
// }
// }
// var ano =new Date().getFullYear();
// for(let i=ano; i>=1900;i--){
//     document.getElementById("ano").innerHTML+="<option value='"+i+"'>"+i+"</option>";
// }
// function ativarContagem(){
//     document.getElementById('tempo').innerHTML= "Começou a contar!";
//     setTimeout(function(){

//         document.getElementById('tempo').innerHTML= "Executou o setTimeout";
//         // document.body.style.backgroundColor="pink";
//     },5000);
// }
// function pararContagem(){
//     clearTimeout(tempo);
//     document.getElementById('tempo').innerHTML= "Parou a contagem!";
// }

// function ativarContagem(){
//     tempo=setInterval(function(){
//         var cronometro = document.getElementById('tempo').innerHTML;
//         var soma=parseInt(cronometro)+1;
//         document.getElementById('tempo').innerHTML= soma;
        
//     }, 1000);
// }
// function pararContagem(){
//     clearInterval(tempo);
// }

// function ativarContagem(){
//     tempo=setInterval(function(){
//         var cronometro = document.getElementById('tempo').innerHTML;
//         var soma=parseInt(cronometro)-1;
//         if(soma===0){

//             document.getElementById('tempo').innerHTML= "Tempo esgotado";
//         }else{

//             document.getElementById('tempo').innerHTML= soma;
            
//         }
//     }, 1000);
// }
// function pararContagem(){
//     clearInterval(tempo);
// }
// class Carro{
//     constructor(valor1,valor2, valor3){
//         this.marca = valor1;
//         this.modelo=valor2;
//         this.ano=valor3;

//     }
// }

// const uno=new Carro("Fiat", "Uno", 2001);
// console.log(uno.ano);

let data=new Date();
let ano=data.getFullYear();
let mes= data.getMonth();
let diaSemana=data.getDay();
const diasdaSemana =["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let diaSemanaEscrito = diasdaSemana[data.getDay()];
let hora=data.getHours();
let minutos=data.getMinutes();
let segundos=data.getSeconds();
let milisegundos=data.getMilliseconds();
let dataBR=data.toLocaleDateString('pt-BR')
console.log(dataBR);
