function mover(direcao) {
    const container = document.querySelector(".container");
    const larguracontainer = container.clientWidth;

    container.scrollLeft += direcao * larguracontainer;
}