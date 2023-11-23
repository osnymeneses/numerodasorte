let chute = document.querySelector("#input-id");
let botao = document.querySelector("#btn");
let p = document.querySelector("#resultado");
let contagem = document.querySelector("#contagem");

let sorte = Math.floor(Math.random() * 101);

botao.addEventListener("click", () => {
    if(chute.value == sorte) {
        let tempo = 10;
        function regressivo() {
            if(tempo > 0) {
                tempo--
                contagem.innerHTML = `Jogue novamente em ${tempo} segundos.`;
                if(tempo == 0) {
                    iniciaJogo();
                }
            }
        }

        setInterval(regressivo, 1000);
        p.style.color = "green";
        p.innerHTML = "Você acertou o Nº da sorte. Parabéns!";
    } else if(chute.value < sorte) {
        p.style.color = "red";
        p.innerHTML = `O número da sorte é maior que ${chute.value}. Tente novamente!`;
        tentativas++
        chute.value = "";
    } else if(chute.value > sorte) {
        p.style.color = "red";
        p.innerHTML = `O número da sorte é menor que ${chute.value}. Tente novamente`;
        tentativas++
        chute.value = "";
    } 

    if(tentativas == 3) {
        alert(`As tentativas acabaram. O nº da sorte era ${sorte}. Tente novamente.`);
        iniciaJogo();
    }
})

document.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        botao.click();
    }
})

function bemVindo(){
    p.innerHTML = "Seja Bem-vindo ao Jogo nº da sorte.<br>Você tem apenas 3 tentativas."
}
bemVindo();

let tentativas = 0;


function iniciaJogo() {
    tentativas = 0;
    location.reload();
    bemVindo();
}
    
