import React from 'react';
import styled from 'styled-components';

  const Tela = styled.div`
      height: 100vh;
      display: flex;
      flex-direction: column;
  `
  const Cabeçalho = styled.header`
      background-color: rgb(28, 23, 95);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50px;
      height: 10%;
  `
  const ContainerProduto = styled.main`
      min-height: 80%;
      display: flex;
  `    
  const Cards = styled.section`
      display: grid;
      grid-template-columns: repeat(4, 24.8% 0.2%);
      grid-template-rows: repeat(4, 270px 20px);
      grid-row-gap: 5px;
      grid-column-gap: 5px;
  `    
  const CardProduto = styled.div`
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
  const Rodape = styled.footer`
      background-color: rgb(28, 23, 95);
      color: white;
      position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      padding: 0 10px;
  `  

export function Produtos (props) {
    return (
        <CardProduto>
            <img src={props.imagem}/>
            <h5>{props.nomeProduto}</h5>
            <h4>{props.preco}</h4>
            <button onClick={() => props.funcaoClick(props.imagem)}>Adicionar ao carrinho</button>
        </CardProduto>
    );
}
