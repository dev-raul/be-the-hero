import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box; 
  }

  body{
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
     
  }
  input, button, textarea{
    font: 400 14px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }
  form input{
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }
  .button{
    width: 100%;
    height: 60px;
    background: #e02041;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
    :hover{
      filter: brightness(90%);
    }
  }
  .back-link {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      text-align: center;
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;
      :hover {
        opacity: 0.8;
      }
      svg {
        margin-right: 8px;
      }
    }
`;
