const btnEscape = document.getElementById("btn-escape");
let condicao = -1

btnEscape.addEventListener("mouseover", fugir);

function fugir() {
    condicao++

    switch (condicao) {
        case 0:
            btnEscape.style.transform = "translate(190px)"
            break;
        case 1:
            btnEscape.style.transform = "translate(190px, -290px)"
            break
        case 2:
            btnEscape.style.transform = "translate(120px, +100px)"
            break
        case 3:
            btnEscape.style.transform = "translate(20px, +130px)"
            break;
        case 4:
            btnEscape.style.transform = "translate(+160px, -130px)"
            condicao = 0
            break;

    }
}