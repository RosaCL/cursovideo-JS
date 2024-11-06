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

function soma(valor1,valor2){
    return valor1+valor2;
}
function realParaDolar(real, cotacaoDolar){
    return real*cotacaoDolar;
}
var valorReal=7.89;
var cotacao=5.08;
var total=realParaDolar(valorReal,cotacao);
alert ("O valor em real é R$: "+valorReal+ " o valor em dólar U$ é: "+ total);