import styled from "styled-components";

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 30px;
    padding: 150px 0px;

    @media screen and (max-width: 900px){  
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
`
export const SubContainerContact = styled.h4`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 900px){  
        width: 60vw;
        align-items: center;
        justify-content: center;

     }
`

export const ContainerTexts = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

`

export const TextTitle = styled.span`
    font-weight: 700;
    color: #ffff;
    font-size: 40px;
    white-space: nowrap;


    @media screen and (max-width: 470px){    
        font-size: 35px;

     }

     @media screen and (max-width: 365px){    
        white-space: normal;

     }
`
export const SubTextTitle = styled.span`
    font-style: normal;
    font-weight: 500;
    color: #94A3B8;
    font-size:20px;
`


export const BoxContact = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    padding: 15px 10px 15px 10px;
    width: 200px;
    justify-content: space-around;
    border: 1px solid #222532;
    transition: all 0.3s ease-in-out;

    
    &:hover, :focus{
        background-color: #007FFF20;
        border: 1px solid #007FFF;
    }

`
export const Icon = styled.svg`

`
export const BoxTexts = styled.span`
    display: flex;
    flex-direction: column;
`
export const LinkText = styled.p`
    font-weight: 500;
    font-size:12px;
    color: #ffff;
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`
export const BoxCV = styled.a`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    border: 1px solid #007FFF;
    align-items: center;
    background: #007FFF;
    border-radius: 5px;
    padding: 15px 10px;
    width: 200px;
    justify-content: space-around;
    transition: all 0.3s ease-in-out;
    
    &:hover, :focus{
        background-color: #007FFF20;
        border: 1px solid #007FFF;
    }


`
export const LinkTextCV = styled.p`
    font-weight: 500;
    font-style: normal;
    font-size: 12px;
    color: #ffff;
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const ContainerSocialMedias = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
    width: 200px;
`

export const SocialMedia = styled.a`
    display: flex;
    height: 60px;
    width: 60px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    border: 1px solid #222532;
    transition: all 0.3s ease-in-out;

    &:hover, :focus{
        background-color: #007FFF20;
        border: 1px solid #007FFF;
    }


`

export const Image = styled.img`
    height: 20vw;

    animation: float 10s ease-in-out infinite;

    @keyframes float {
        0%{
            transform: translateY(0);
        }
        20%{
            transform: translateY(-25px);
        }
        40%{
            transform: translateX(-25px);
        }
        60%{
            transform: translateY(-25px);
        }
        80%{
            transform: translateX(-25px);
        }
        100%{
            transform: translateY(0);
        } 
    }

    @media screen and (max-width: 1400px){    
        height: 30vw;
    }
    @media screen and (max-width: 750px){    
        height: 50vw;
    }
    
`