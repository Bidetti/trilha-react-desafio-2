import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    height: 100px;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }
    .remover {
        background-color: #F00000;
        color: #FAFAFA;
        width: 20%;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        text-decoration: none;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
    }

    .remover:hover {
        background-color: #F0000060;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

    .verRepo {
        background-color: #007FFF;
        color: #FAFAFA;
        width: 20%;
        padding: 10px 20px; 
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
    }

    .verRepo:hover {
        background-color: #007FFF60;
    }

`