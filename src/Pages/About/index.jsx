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
        <ContainerAbout id='about'>
            <div>
                <Image src={myphoto} alt="foto-programando" />
            </div>

            <SubContainerAbout>
                <Title>Sobre mim</Title>
                <Description>
                    Comecei minha jornada na programação em 2021, quando ingressei no Curso em Vídeo. Desde então, descobri que sou apaixonado por tecnologia e desenvolvimento pessoal.
                </Description>
                <Description>
                    Atualmente, estudo linguagens e frameworks como JavaScript, TypeScript, React, React Native, Node.js, entre outras tecnologias, que utilizo para criar aplicações web e mobile de alto nível e valor.
                </Description>
                <Description>
                    Meu foco é aprender continuamente e aprimorar as habilidades que já possuo. Estou sempre em busca de evolução e agregando valor diariamente.
                </Description>

                <ContainerButton>
                    <ContactButton href="#contact">
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