const title = document.body.querySelector('.title');

const openWindow = (element) => {
    title.innerText = 'Janela aberta';
    element.src = './assets/janela_aberta.jpg';
}

const closeWindow = (element) => {
    title.innerText = 'Janela fechada';
    element.src = './assets/janela_fechada.jpg';
}

const brokeWindow = (element) => {
    title.innerText = 'Janela quebrada';
    element.src = './assets/janela_quebrada.jpg';