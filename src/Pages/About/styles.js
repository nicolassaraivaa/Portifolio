import styled from "styled-components";

export const ContainerAbout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 150px 0px;

    @media screen and (max-width: 1060px) {    
        flex-direction: column;
        gap: 100px;
    }

    @media screen and (max-width: 645px) {    
        gap: 20px;
    }
`;

export const Image = styled.img`
    width: 400px;

    @media screen and (max-width: 645px) {    
        width: 77vw;
    }
`;

export const SubContainerAbout = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.h2`
    color: rgb(255, 255, 255);
    font-weight: 700;
    font-size: 40px;

    @media screen and (max-width: 468px) {    
        font-size: 35px;
    }
`;

export const Description = styled.span`
    width: 40vw;
    font-weight: 500;
    color: #94A3B8;
    font-size: 16px;
    word-spacing: -0.05em;

    @media screen and (max-width: 1060px) {    
        width: 70vw;
    }
`;

export const ContainerButton = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 10px;
`;

export const ContactButton = styled.a`
    text-decoration: none;
    display: flex;
    background-color: #007FFF;
    border: 1px solid #007FFF; 
    padding: 20px 40px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: fit-content;
    transition: all 0.3s ease-in-out;

    &:hover, &:focus {
        background-color: #007FFF20;
        border: 1px solid #007FFF;
    }

    &:hover span, &:focus span {
        color: #007FFF;
    }
`;

export const TextButton = styled.span`
    font-weight: 700;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    font-size: 18px;
`;


