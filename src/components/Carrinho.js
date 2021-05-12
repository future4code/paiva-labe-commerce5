import React from 'react';
import styled from 'styled-components'
const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction:column;
    height:100vh;
    width:20%;
    border-left:2px solid black;
    h1{
        padding:8px;
    }
`
const CarrinhoProdutos = styled.div`
    display:grid;
    justify-content:center;
    padding:4px;
    // teste para enxergar a posição
    border:2px solid black;
    button{
        
    }
`


class Carrinho extends React.Component {
    render() {
        return (
            <ContainerCarrinho>
                <h1>Carrinho:</h1>
                <CarrinhoProdutos>
                    <p>1x Produto BLBALABAL</p>
                    <button>Remover</button>
                    <p>1x Produto BLBALABAL</p>
                    <button>Remover</button>
                    <p>Valor Total: R$</p>
                </CarrinhoProdutos>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho