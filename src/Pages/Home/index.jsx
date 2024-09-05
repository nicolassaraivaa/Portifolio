import Typewriter from 'typewriter-effect';
import PhotoHome from '../../assets/photo-home.png'
import { Link } from 'react-router-dom';


import {
  Container,
  Navegation,
  SubText,
  MyInformation,
  Myname,
  TextNavs,
  DivImg,
  Image
} from './styles'


function Home() {

  return (
    <Container>

      <MyInformation>
        <Myname>Nicolas Saraiva</Myname>

        <SubText>
          <Typewriter
            options={{
              strings: ['< Front End Developer />', '< Desenvolvedor Front End />'],
              delay: 30,
              autoStart: true,
              loop: true,
            }} />
        </SubText>

        <Navegation>
          <TextNavs href="#about">Sobre</TextNavs>
          <TextNavs href="#skills">Skills</TextNavs>
          <TextNavs href="#projects">Projetos</TextNavs>
          <TextNavs href="#contact">Contato</TextNavs>
        </Navegation>

      </MyInformation>

      <DivImg>
        <Image src={PhotoHome} alt="photo-home" />
      </DivImg>

    </Container>
  )
}

export default Home
