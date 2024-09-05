import telalogin from '../../assets/imgProjects/telalogin1.png'
import currency from '../../assets/imgProjects/currency.png'
import jokenpo from '../../assets/imgProjects/jokenpo.png'
import weather from '../../assets/imgProjects/weather.png'
import sorteador from '../../assets/imgProjects/sorteador.png'
import mario from '../../assets/imgProjects/mario.png'
import simplelogin from '../../assets/imgProjects/simplelogin.png'
import hallowenpage from '../../assets/imgProjects/hallowenpage.png'

const ProjectsData = [
    {
        "id": 1,
        "img": telalogin,
        "title": "Cadastro de Users",
        "description": "Sistema de cadastro e gerenciamento de usuários com frontend em React e backend em Express. Permite cadastrar e listar usuários, e excluir registros. Usa MongoDB e Prisma para gerenciamento de dados.",
        "tool": "React · JavaScript · Express · MongoDB",
        "github": "https://github.com/nicolassaraivaa/devclub-cadastro-usuarios",
        "link": "https://devcadastro-usuarios.vercel.app/"
    },
    {
        "id": 2,
        "img": currency,
        "title": "Conversor",
        "description": "Aplicação de conversão de moedas que permite ao usuário selecionar moedas de origem e destino, inserir um valor e ver a conversão. Utiliza JavaScript para obter taxas de câmbio da API e atualizar a interface com o valor convertido.",
        "tool": "HTML · CSS · JavaScript · Fetch API",
        "github": "https://github.com/nicolassaraivaa/projeto-conversor",
        "link": "https://nicolassaraivaa.github.io/projeto-conversor/"
    },
    {
        "id": 3,
        "img": weather,
        "title": "Previsão do Tempo",
        "description": "Aplicação web que exibe a previsão do tempo para uma cidade, utilizando a API OpenWeatherMap. O frontend é desenvolvido com HTML, CSS e JavaScript.",
        "tool": "HTML · JavaScript · OpenWeather API",
        "github": "https://github.com/nicolassaraivaa/projeto-waether",
        "link": "https://nicolassaraivaa.github.io/projeto-waether/"
    },
    {
        "id": 4,
        "img": jokenpo,
        "title": "Jokenpô",
        "description": "Jogo JokenPô (Pedra, Papel e Tesoura) com seleção de oponentes virtuais, pontuação e reinício do jogo. Permite ao usuário definir seu nome e escolher entre diferentes oponentes.",
        "tool": "HTML · CSS · JavaScript",
        "github": "https://github.com/nicolassaraivaa/projeto-jokenpo",
        "link": "https://nicolassaraivaa.github.io/projeto-jokenpo/"
    },
    {
        "id": 5,
        "img": sorteador,
        "title": "DevSorteio",
        "description": "Aplicação web que sorteia um número aleatório entre dois valores definidos pelo usuário.",
        "tool": "HTML · CSS · JavaScript",
        "github": "https://github.com/nicolassaraivaa/projeto-sorteador",
        "link": "https://nicolassaraivaa.github.io/projeto-sorteador/"
    },
    {
        "id": 6,
        "img": simplelogin,
        "title": "Tela Login",
        "description": "O código cria páginas de login e cadastro com campos para email e senha, botões estilizados e links de navegação.",
        "tool": "HTML · CSS ",
        "github": "https://github.com/nicolassaraivaa/Projeto-Tela-de-Login",
        "link": "https://nicolassaraivaa.github.io/Projeto-Tela-de-Login/"
    },
    {
        "id": 7,
        "img": hallowenpage,
        "title": "Halloween",
        "description": "O código define um aplicativo React com uma página principal estilizada. A estrutura inclui um cabeçalho com navegação, uma seção principal com uma imagem animada",
        "tool": "React · Styled-components · JavaScript",
        "github": "https://github.com/nicolassaraivaa/project-halloween",
        "link": "https://page-halloween.vercel.app/"
    },
    {
        "id": 8,
        "img": mario,
        "title": "Mario Bros",
        "description": "Página para uma empresa de encanamento com informações sobre serviços e um formulário de contato que aparece ao clicar em um botão.",
        "tool": "HTML · CSS · JavaScript",
        "github": "https://github.com/nicolassaraivaa/projeto-mario-bros",
        "link": "https://nicolassaraivaa.github.io/projeto-mario-bros/"
    }
]

export default ProjectsData;