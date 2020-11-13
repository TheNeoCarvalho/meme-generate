import styled from 'styled-components';

export const Wrapper = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const Card = styled.div`

    background-color: #fff;
    width: 550px;
    border-radius: 8px;
    padding: 20px;
    margin-top: 15px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);

    h2 {
        font-size: 18px;
        color: #392d2d;
        margin: 15px 0;
    }

`;

export const Templates = styled.div`

    width: 100%;
    height: 90px;
    background-color: #eee;
    border-radius:  4px;
    overflow-y: auto;
    margin: 15px 0;
    display: flex;
    align-items: center;
    padding: 0 15px;


    button {

        border: 0;
        background-color: transparent;
        margin-right: 10px;
        border: 2px solid transparent;

        &.selected {
            border-color: #4395d8;
        }

        img {

            width: 53px;
            height: 53px;

        }
    }

`;

export const Form = styled.form`

    input{

        width: 100%;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #dbdbdb;
        font-size: 14px;
        margin-bottom: 5px;
        padding: 5px;

    }

`;

export const Button = styled.button`

    width: 100%;
    height: 40px;
    border-radius: 4px;
    background-color: #4395d8;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s ease-in;

    &:hover {
        background-color: #3672a3;
    }

`;