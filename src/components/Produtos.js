import React from 'react';
import styled from 'styled-components';

export const Tela=styled.div`
      height: 100vh;
      display: flex;
      flex-direction: column;
      `
export const Cabeçalho=styled.header`
      background-color: rgb(28, 23, 95);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50px;
      height: 10%;
      `
export const ContainerProduto=styled.main`
      min-height: 80%;
      display: flex;
      `    
export const Cards=styled.section`
      display: grid;
      grid-template-columns: repeat(4, 24.8% 0.2%);
      grid-template-rows: repeat(4, 270px 20px);
      grid-row-gap: 5px;
      grid-column-gap: 5px;
      `    
export const CardProduto=styled.div`
      display: grid;
      grid-template-rows: 3fr 1fr;
      grid-template-columns: 1fr;
      border-style: solid;
      border-width: thin;
      align-items: start;
      justify-items: stretch;
      img {
          width: 100%;
          height: 200px;
      }
      `    
export const Rodape=styled.footer`
      background-color: rgb(28, 23, 95);
      color: white;
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      padding: 0 10px;
      `  

export default class Produtos extends React.Component{
    state = {

    }
  render(){  
    return (
        <CardProduto>
            <img src={this.props.imagem}/>
            <h5>{this.props.nomeProduto}</h5>
            <h4>{this.props.preco}</h4>
            <button onClick={() => this.props.funcaoClick(this.props.imagem)}>Adicionar ao carrinho</button>
        </CardProduto>
    );
  }  
}
