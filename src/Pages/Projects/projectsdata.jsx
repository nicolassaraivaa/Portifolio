import telalogin from '../../assets/imgProjects/telalogin1.png'
import currency from '../../assets/imgProjects/currency.png'
import jokenpo from '../../assets/imgProjects/jokenpo.png'
import weather from '../../assets/imgProjects/weather.png'
import sorteador from '../../assets/imgProjects/sorteador.png'
import mario from '../../assets/imgProjects/mario.png'
import simplelogin from '../../assets/imgProjects/simplelogin.png'
import hallowenpage from '../../assets/imgProjects/hallowenpage.png'
import chackoutPage from '../../assets/imgProjects/checkout.jpg'
import finansys from '../../assets/imgProjects/finansys.png'


const ProjectsData = [
    {
        "id": 1,
        "img": chackoutPage,
        "title": "Sistema de Pedidos Online",
        "description": "Aplicação para restaurantes que permite cadastrar cardápio, gerenciar carrinho e finalizar pedidos com diferentes status. Desenvolvido com Next.js, Prisma e PostgreSQL.",
        "tool": "Next.js · TypeScript · Node.js · Prisma · PostgreSQL · shadcn/ui",
        "github": "https://github.com/nicolassaraivaa/checkout-fast-food",
    },
    {
        "id": 2,
        "img": finansys,
        "title": "FinanSys",
        "description": "Aplicação completa para gerenciamento financeiro pessoal. Possui interface moderna para controle de categorias, transações, balanços e evolução mensal, integrada a uma API rápida e segura para autenticação.",
        "tool": "React · TypeScript · Tailwind CSS · Firebase · Node.js · Prisma · MongoDB",
        "github": "https://github.com/nicolassaraivaa/FinanSys-interface",
    },
    {
        "id": 3,
        "img": telalogin,
        "title": "Cadastro de Users",
        "description": "Sistema de cadastro e gerenciamento de usuários em React e Express. Permite cadastrar e listar usuários, e excluir registros. Usa MongoDB e Prisma para gerenciar os dados.",
        "tool": "React · JavaScript · Node Js · MongoDB",
        "github": "https://github.com/nicolassaraivaa/devclub-cadastro-usuarios",
    },
    {
        "id": 4,
        "img": currency,
        "title": "Conversor",
        "description": "O código realiza a conversão de moedas com base na seleção do usuário e exibe o valor convertido. Utiliza uma API para taxas de câmbio e formata o valor final.",
        "tool": "HTML · CSS · JavaScript · Fetch API",
        "github": "https://github.com/nicolassaraivaa/projeto-conversor",
        "link": "https://nicolassaraivaa.github.io/conversor-de-moedas/"
    },
    {
        "id": 5,
        "img": weather,
        "title": "Previsão do Tempo",
        "description": "Aplicação web que exibe a previsão do tempo para uma cidade, utilizando a API OpenWeatherMap. O frontend é desenvolvido com HTML, CSS e JavaScript.",
        "tool": "HTML · JavaScript · OpenWeather API",
        "github": "https://github.com/nicolassaraivaa/projeto-waether",
        "link": "https://nicolassaraivaa.github.io/previsao-do-tempo/"
    },
    {
        "id": 6,
        "img": jokenpo,
        "title": "Jokenpô",
        "description": "Jogo JokenPô (Pedra, Papel e Tesoura) com seleção de oponentes virtuais, pontuação e reinício do jogo. Permite ao usuário definir seu nome e escolher entre diferentes oponentes.",
        "tool": "HTML · CSS · JavaScript",
        "github": "https://github.com/nicolassaraivaa/projeto-jokenpo",
        "link": "https://nicolassaraivaa.github.io/game-jokenpo/"
    },
    {
        "id": 7,
        "img": sorteador,
        "title": "DevSorteio",
        "description": "Aplicação web que sorteia um número aleatório entre dois valores definidos pelo usuário.",
        "tool": "HTML · CSS · JavaScript",
        "github": "https://github.com/nicolassaraivaa/projeto-sorteador",
        "link": "https://nicolassaraivaa.github.io/sorteador/"
    },
    {
        "id": 8,
        "img": simplelogin,
        "title": "Tela Login",
        "description": "O código cria páginas de login e cadastro com campos para email e senha, botões estilizados e links de navegação.",
        "tool": "HTML · CSS ",
        "github": "https://github.com/nicolassaraivaa/Projeto-Tela-de-Login",
        "link": "https://nicolassaraivaa.github.io/Tela-de-Login/"
    },
    {
        "id": 9,
        "img": hallowenpage,
        "title": "Halloween",
        "description": "O código define um aplicativo React com uma página principal estilizada. A estrutura inclui um cabeçalho com navegação, uma seção principal com uma imagem animada",
        "tool": "React · Styled-components · JavaScript",
        "github": "https://github.com/nicolassaraivaa/project-halloween",
        "link": "https://page-halloween.vercel.app/"
    },
    {
        "id": 10,
        "img": mario,
        "title": "Mario Bros",
        "description": "Página para uma empresa de encanamento com informações sobre serviços e um formulário de contato que aparece ao clicar em um botão.",
        "tool": "HTML · CSS · JavaScript",
        "github": "https://github.com/nicolassaraivaa/projeto-mario-bros",
        "link": "https://nicolassaraivaa.github.io/mario-bros/"
    }
]

export default ProjectsData;