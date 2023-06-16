//Se a pessoa quiser ver as imagens da pagina ela da o ok e as imagens vao aparecer

alert("ALERTA DE SPOILER");

let escolha = confirm("Você aceita ver todas as imagens da página?");

if(escolha) {
    document.querySelectorAll(".acotar").style.visibility = "visible";
}
//for 
//salvar na variavel , excuta o for pra cada um, display, "lista"