import styled from "styled-components";

export const ContainerProjects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 150px 0px;
`
export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 60vw;
    align-items: baseline;


    @media screen and (max-width: 800px){    
        flex-direction: column;
        gap: 20px;
        
    }

    @media screen and (max-width: 600px){    
        width: 80vw        
    }

`
export const SubTitle = styled.h2`
    font-style: normal;
    font-weight: 700;
    color: #ffff;
    font-size: 40px;
    white-space: nowrap;

    
    @media screen and (max-width: 468px){    
        font-size: 35px;
    }

    @media screen and (max-width: 365px){    
        white-space: normal;
    }

`
export const ButtonSeeMore = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #222532 ;
    border: 1px solid #ffff;
    height: 30px;
    border-radius: 5px;

    &:hover, :focus{
        background-color: #007FFF20;
        border: 1px solid #007FFF;
    }

`
export const TextSeeMore = styled.span`
    font-style:normal;
    font-weight: 700;
    color: white;
    font-size: 15px;
`
export const ContainerAllProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 60vw;
`
export const Project = styled.div`
    display: flex;
    background: #222532;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    flex-direction: column;
    border-radius: 20px;
`
export const BoxImage = styled.div`
    display: flex;
    background: #E6E9F0;
    height: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0px 0px;

`

export const Image = styled.img`
    display: flex;
    height: 70%;
`

export const ContainerTitleProjects = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 10px;
`
export const TitleProject = styled.span`
    font-style: normal;
    font-weight: 500;
    color: #ffff;
    font-size: 25px;
`
export const Description = styled.p`
    font-style: normal;
    font-weight: 500;
    color: #94A3B8;
    margin: 0 30px;
    text-align: justify;
    height: 175px;
    word-spacing: -0.05em;

`
export const Tools = styled.p`
    font-style: normal;
    font-weight: 400;
    color: #94A3B8;
    margin: 20px 30px 30px 30px;

`

export const Containerlink = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
`;
