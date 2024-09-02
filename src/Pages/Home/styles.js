import styled from "styled-components";

export const Container = styled.div`
    background: radial-gradient(46.97% 53.54% at 50% 46.46%, rgb(0 171 253 / 20%) 0%, rgba(0, 1, 2, 0) 100%), rgb(35, 37, 50);
    height: 100vh;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20%;

    @media screen and (max-width: 780px){  
        background: radial-gradient(97% 53.54% at 50% 46.46%, rgb(0 171 253 / 20%) 0%, rgba(0, 1, 2, 0) 100%), linear-gradient(0deg, rgb(35, 37, 50), rgb(35, 37, 50)), rgb(255, 255, 255);;
    }

    @media screen and (max-width: 980px){  
        flex-direction: column;
        justify-content: space-evenly;

    }

    @media screen and (max-width: 1560px){  
        padding: 0 10%;
    }
`

export const MyInformation = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    
    h1{
        font-weight: 700;
        font-size: 50px;
    }
`


export const Myname = styled.span`
    font-weight: 700;
    font-size: 50px;

    @media screen and (max-width: 536px){  
        font-size: 9.3vw;
    }
`

export const SubText = styled.div`
    font-weight: 600;
    font-size: 25px;

        @media screen and (max-width: 536px){  
        font-size: 4.5vw;
    }

`

export const Navegation = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 30px;

`

export const TextNavs = styled.a`
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
    color: white;
    
    &::after{
        content: "";
        background-color: #007FFF;
        height: 3px;
        width: 0%;
        display: block;
        transition: .3s ease-in-out;
    }

    &:hover::after{
        content: "";
        background-color: #007FFF;
        height: 3px;
        width: 70%;
        display: block;
    }

    @media screen and (max-width: 390px){  
        font-size: 12px;
    }

    @media screen and (max-width: 360px){  
        font-size: 10px;
    }

`

export const DivImg = styled.div`    

`

export const Image = styled.img`
    height: 40vh;
    animation: float 10s ease-in-out infinite;

    @media screen and (max-width: 980px){  
        height: 30vh;
    }


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
    

`
