import { useState } from "react";
import ProjectsData from "./projectsdata/"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

import {
    ContainerProjects,
    ContainerTitle,
    SubTitle,
    ButtonSeeMore,
    TextSeeMore,
    ContainerAllProjects,
    Project,
    BoxImage,
    Image,
    ContainerTitleProjects,
    TitleProject,
    Description,
    Containerlink,
    Tools
} from './styles'



function Projects () {
    AOS.init();
    const [controller, setController] = useState(false)

    function seeMore () {
        setController (!controller)
        console.log(controller)
    }

    let teste;

    if(controller == true){
        teste = Infinity
    } else{
        teste = 3
    }

    return(
        <ContainerProjects id="projects">
            <ContainerTitle>
                <SubTitle>
                    Projetos pessoais
                </SubTitle>

                <ButtonSeeMore onClick={seeMore}>
                    <TextSeeMore>
                        {controller ? "Ver menos" : "Ver mais" }
                    </TextSeeMore>
                </ButtonSeeMore>  
            </ContainerTitle>

            <ContainerAllProjects>
                {ProjectsData.slice(0,teste).map((item) =>( 
                    <Project key={item.id} data-aos="zoom-in">
                        <BoxImage>
                            <Image src={item.img}/>
                        </BoxImage>

                        <ContainerTitleProjects>
                            <TitleProject>{item.title}</TitleProject>
                            <Containerlink>
                                <a target="blank" href={item.github}>
                                    <AiFillGithub color="#ffff" size={25}/> 
                                </a>
                                <a target="blank" href={item.link}>
                                    <FiExternalLink color="#ffff" size={25}/> 
                                </a>
                            </Containerlink>
                        </ContainerTitleProjects>

                        <Description>{item.description}</Description>
                        <Tools>{item.tool}</Tools>
                    </Project>
                ))} 

            </ContainerAllProjects>
        </ContainerProjects>
    )
}

export default Projects