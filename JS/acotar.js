//Se a pessoa quiser ver as imagens da pagina ela da o ok e as imagens vao aparecer

let escolha = confirm("Você aceita ver todas as imagens da página?");

if(escolha) {
    document.querySelector(".acotar").style.display = "inline-block";
  // document.querySelector(".ganso").setAttribute("class", "visivel");//atribuindo a classe 
} 