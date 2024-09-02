import skillsData from "./skills";
import { ImRadioChecked } from "react-icons/im";


import {
    ContainerAbout,
    SubtitleContainer,
    SubTitle,
    ContainerTech,
    BoxTech,
    TextTech
} from './styles';

function Skills() {

    return (
        <ContainerAbout id="skills">
            <SubtitleContainer>
                <SubTitle>
                    Linguagens e tecnologias
                </SubTitle>
            </SubtitleContainer>
            <ContainerTech>
                {skillsData.map((item) => (
                    <BoxTech key={item.id}>
                        <img src={item.img} />
                        <TextTech>{item.name}</TextTech>
                    </BoxTech>
                ))}
            </ContainerTech>
        </ContainerAbout>
    )
}

export default Skills