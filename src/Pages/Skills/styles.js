import styled from "styled-components";

export const ContainerAbout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 150px 0px;


`;

export const SubtitleContainer = styled.div`
    width: 60vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;


`;

export const SubTitle = styled.h1`
    font-style: normal;
    font-weight: 700;
    color: white;
    font-size: 40px;
    white-space: nowrap;


    @media screen and (max-width: 700px){    
        font-size: 35px;

    }

    @media screen and (max-width: 600px){    
        white-space: normal;

    }


`;

export const ContainerTech = styled.div`
    width: 60vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 330px){    
        width: fit-content;

    }
`;

export const BoxTech = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: #232532;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    border-radius: 5px;
    
`;

export const TextTech = styled.span`
    font-weight: 500;
    color: white;
    font-size:20px;

`;


