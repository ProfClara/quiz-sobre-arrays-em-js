  /*   ──────▄▀▄─────▄▀▄
      ─────▄█░░▀▀▀▀▀░░█▄
      ─▄▄──█░░░░░░░░░░░█──▄▄
      █▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
      🅷🅰🅲🅺🅴🆁 🅰🅻🅴🆁🆃

      Se você chegou aqui talvez você seja um 
      pequeno racker..
      Humn..  espero que não esteja tentando
      ver as respostas ok                   
      ___________________________________________*/

let numeroDaQuestao  = 0;
let parag = document.getElementById("paragrafo");
let meuInput = document.getElementById("caixadetexto");
let escrita = document.getElementById("paraescrita");
let prox = document.getElementById("prox");

function sobreArrays(){
  switch(numeroDaQuestao){
    case 0: criarArray();
    break;
    case 1: acessarElementos();
    break; 
    case 2: acessarElementos2();
    break;
    case 3: comprimentoArray();
    break;
    case 4: pushFinal();
    break;
    case 5: criarArrayAlfabeto();
    break;
    case 6: organizarArrayAlfabeto();
    break;
    case 7: inverterArrayAlfabeto();
    break;
    case 8: arrayDeNumeros();
    break;
    case 9: max();
    break;
    case 10: min();
    break;
    case 11: inicioUnshift();
    break; 
    case 12: fim();
    break;      
    } 
}

function limpaForm(){
  meuInput.value="";
  escrita.innerHTML=""; 
  sobreArrays();
  prox.innerHTML=" ";
}

//Como criar um Array ? 0
function criarArray(){
  console.log("Eu sou criarArray");
  meuInput = document.getElementById("caixadetexto");
  escrita = document.getElementById("paraescrita");
  prox = document.getElementById("prox");

  if(meuInput.value == "var frutas") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 1;
    prox.innerHTML="Próxima Pergunta ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
}

//Como buscar o primeiro elemento do Array ? 1
function acessarElementos(){
  console.log("Eu sou acessarElementos");   
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 1 "     
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Imagine que você agora acessar somente a primeira fruta dessa lista,tente fazer isso usando console.log()";
  
  if(meuInput.value == "console.log(frutas[0])") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 2;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como buscar o segundo elemento do Array ? 2
function acessarElementos2(){
  console.log("Eu sou acessar Elementos2");    
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 2 "     
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Agora imagine que você agora acessar somente a segunda fruta dessa lista,tente fazer isso usando console.log()";
  
  if(meuInput.value == "console.log(frutas[1])") {
    escrita.innerHTML="PARABÉNS !  ";
    numeroDaQuestao = 3;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como obter o comprimento do Array ? 3
function comprimentoArray(){
  console.log("Eu sou comprimentoArray");  
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 3 "       
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Bom, agora veja se você consegue saber o comprimento da lista frutas.  Use console.log ";
  
  if(meuInput.value == "console.log(frutas.length)") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 4;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como adicionar o elemento ao final do Array ? 4
function pushFinal(){
  console.log("Eu sou pushFinal");   
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 4 "      
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Agora tente colocar o limão (com letras minúsculas) no final da lista. Dica: use push() e use console.log" ;
  
  if(meuInput.value == 'console.log(frutas.push("limão"))') {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 5;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como declarar o array com letras do alfabeto ? 5
function criarArrayAlfabeto(){
  console.log("Eu sou criarArrayAlfabeto"); 
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 5 "        
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="crie um array chamado alfabeto com as letras 'B','R','Z' e 'F' ";
  
  if(meuInput.value == "var alfabeto=['B','R','Z','F']") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 6;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como organizar o array anterior  do alfabeto  com sort()? 6
function organizarArrayAlfabeto(){
  console.log("Eu sou organizarArrayAlfabeto");  
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 6 "       
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Agora use sort()  para organizar em ordem alfabetica.  Use console.log";
  
  if(meuInput.value == "console.log(alfabeto.sort())") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 7;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como inverter o array com o alfabeto ? 7
function inverterArrayAlfabeto(){
  console.log("Eu sou inverterArrayAlfabeto"); 
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 7 "        
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Desta vez inverta a ordem alfabética.  Use console.log ";
  
  if(meuInput.value == "console.log(alfabeto.reverse())") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 8;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Criar um array de números 8
function arrayDeNumeros(){
  console.log("Eu sou arrayDeNumeros");      
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 8 "   
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Crie um array chamado numeros com os números 100 ,20, 10, 5 e 2";
  
  if(meuInput.value == "var numeros=[100,20,10,5,2]") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 9;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como encontar o número máximo de um array numerico? 9
function max(){
  console.log("Eu sou max");
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 9 "         
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Como saber o valor MÁXIMO desse array? Para facilitar não precisa usar console.log() ";
  
  if(meuInput.value == "Math.max.apply(Math, numeros)") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 10;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como encontar o número mínimo de um array numerico? 10
function min(){
  console.log("Eu sou min");   
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Questão 10 "      
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Como saber o valor MÍNIMO desse array? Para facilitar não precisa usar console.log()";
  
  if(meuInput.value == "Math.min.apply(Math, numeros)") {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 11;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

//Como add elementos no  início do array 11
function inicioUnshift(){
  console.log("Eu sou inicioUnshift");  
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "B O N U S !!!"
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  questao =  document.getElementById("1i");
  questao.innerHTML="Lembra da lista de frutas? Então. Como você faria para incluir uma melancia no INÍCIO da lista? Ps.: Não use console.log desta vez."  ;
  
  if(meuInput.value == 'frutas.unshift("melancia")') {
    escrita.innerHTML="PARABÉNS !";
    numeroDaQuestao = 12;
    prox.innerHTML="Próxima Pergunta Vindo ➡ ";
    setTimeout(
      limpaForm, 
    2000);     
  }else if(meuInput.value == ""){
    escrita.innerHTML="Escreva algo! Vai, você consegue!";    
  }else{
    escrita.innerHTML="ERRADO!";
  }
  
}

function fim(){
  console.log("Eu sou fim");  
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "PARABÉNS !!!"
  meuInput = document.getElementById("caixadetexto");  
  escrita = document.getElementById("paraescrita");  
  parag = document.getElementById("paragrafo");
  parag.innerHTML = "Chegamos ao fim ! Incrível !"
  questao =  document.getElementById("1i");
  questao.innerHTML=" " ;
  $(document).ready(function(){
    
      $("#sub").hide();
      $("#caixadetexto").hide();
      $("#p1").hide();
    
  });
}