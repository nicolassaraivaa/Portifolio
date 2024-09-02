import myphoto from '../../assets/myphoto.jpeg'

import {
    ContainerAbout,
    SubContainerAbout,
    Image,
    Title,
    Description,
    ContainerButton,
    ContactButton,
    TextButton


} from './styles'

function About() {

    return (
        <ContainerAbout id='sobre'>
            <Image src={myphoto} alt="" />

            <SubContainerAbout>
                <Title>Sobre mim</Title>
                <Description>
                    Comecei minha jornada na programação em 2019, quando ingressei em uma escola técnica de informatíca, de lá pra cá descobri sou um apaixonado por tecnologia e por desenvolvimento pessoal.
                </Description>
                <Description>
                    Atualmente estou estudando linguagens/frameworks como: Javascript, TypeScript, React, React Native, NodeJS entre outras tecnologias que uso para criar aplicações web/mobile de alto nível e valor.
                </Description>
                <Description>
                    Meu foco é aprender novas coisas e aprimorar ainda mais as habilidades que possuo, gosto sempre de estar em constante aprendizado e evoluindo dia após dia, e agregando muito valor.
                </Description>

                <ContainerButton>
                    <ContactButton href="">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButton>

            </SubContainerAbout>



        </ContainerAbout>
    )
}

export default About