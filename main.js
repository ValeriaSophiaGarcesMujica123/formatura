// ===== ARRAY COM AS 15 REDAÇÕES =====
// Substitua os textos "escreva aqui" pelas suas redações reais!
const redacoes = [
    { titulo: "Redação 01 — Meu Primeiro Dia de Aula", texto: "Era uma manhã de sol quando segurei a mão da minha mãe e entrei pela primeira vez na escola... (escreva aqui o restante da sua redação)." },
    { titulo: "Redação 02 — O Medo do Recreio", texto: "No começo, o barulho do pátio me assustava. Eu ficava perto da professora, observando as outras crianças... (escreva aqui)." },
    { titulo: "Redação 03 — A Professora que Marcou", texto: "A Dona Maria me ensinou que errar faz parte de aprender. Um dia ela disse algo que nunca esqueci... (escreva aqui)." },
    { titulo: "Redação 04 — Descobrindo a Leitura", texto: "O primeiro livro que li sozinho foi uma história de aventura que me transportou para outro mundo... (escreva aqui)." },
    { titulo: "Redação 05 — O Desafio da Matemática", texto: "As equações sempre foram um bicho de sete cabeças para mim. Até que um dia... (escreva aqui)." },
    { titulo: "Redação 06 — A Amizade Verdadeira", texto: "Conheci meu melhor amigo no meio do caos do recreio. Ele estava sozinho, e eu resolvi me aproximar... (escreva aqui)." },
    { titulo: "Redação 07 — Uma Viagem Inesquecível", texto: "A excursão da escola para a serra foi o dia mais esperado do ano. Lembro do ônibus cheio de risadas... (escreva aqui)." },
    { titulo: "Redação 08 — O Primeiro Fracasso", texto: "Tirei uma nota baixa em uma prova que eu achava que tinha ido bem. Chorei, mas aprendi que... (escreva aqui)." },
    { titulo: "Redação 09 — A Pandemia e a Escola", texto: "As aulas remotas me ensinaram que a escola vai muito além da sala de aula. Senti falta de... (escreva aqui)." },
    { titulo: "Redação 10 — O Gato do Pátio", texto: "Havia um gato laranja que vivia perto da quadra. Todos os dias, ele aparecia para ganhar carinho dos alunos... (escreva aqui)." },
    { titulo: "Redação 11 — A Feira de Ciências", texto: "Meu projeto sobre vulcões de bicarbonato parecia simples, mas a apresentação me ensinou muito sobre... (escreva aqui)." },
    { titulo: "Redação 12 — O Grêmio Estudantil", texto: "Participar do grêmio foi um dos maiores desafios da minha vida escolar. Aprendi a liderar, ouvir e... (escreva aqui)." },
    { titulo: "Redação 13 — A Ansiedade do 3º Ano", texto: "O peso do vestibular e do ENEM caiu sobre meus ombros no início do 3º ano. Aos poucos, descobri que... (escreva aqui)." },
    { titulo: "Redação 14 — A Última Aula", texto: "Olhar para a sala vazia no último dia de aula foi como ver um filme passar em câmera lenta... (escreva aqui)." },
    { titulo: "Redação 15 — O Futuro que me Espera", texto: "Agora, ao fechar esse ciclo, sinto um misto de saudade e expectativa. O futuro é uma página em branco que... (escreva aqui)." }
];

// ===== CRIAÇÃO DINÂMICA DOS CARDS =====
const gridRedacoes = document.getElementById('grid-redacoes');

redacoes.forEach((redacao, index) => {
    const card = document.createElement('div');
    card.classList.add('card-redacao');
    card.innerHTML = `
        <h3>${redacao.titulo}</h3>
        <p>Clique para ler 🐾</p>
    `;
    card.addEventListener('click', () => abrirModal(index));
    gridRedacoes.appendChild(card);
});

// ===== CONTROLE DO MODAL =====
const modal = document.getElementById('modal-redacao');
const tituloModal = document.getElementById('titulo-redacao');
const textoModal = document.getElementById('texto-redacao');
const fecharModal = document.getElementById('fechar-modal');

function abrirModal(index) {
    tituloModal.textContent = redacoes[index].titulo;
    textoModal.textContent = redacoes[index].texto;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // trava o scroll do fundo
}

function fechar() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

fecharModal.addEventListener('click', fechar);

// Fecha ao clicar fora da caixa de texto
modal.addEventListener('click', (event) => {
    if (event.target === modal) fechar();
});

// Fecha com a tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') fechar();
});

// ===== SCROLL SUAVE NOS LINKS DO MENU =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const alvo = document.querySelector(link.getAttribute('href'));
        alvo.scrollIntoView({ behavior: 'smooth' });
    });
});