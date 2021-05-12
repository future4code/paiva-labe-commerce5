import React from 'react';
import styled from 'styled-components'
import ItemCarrinho from './ItemCarrinho';


const ContainerCarrinho = styled.div`
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    display: flex;
    flex-direction:column;
    height:100vh;
    width:20%;
    border-left:2px solid black;
    border-top:2px solid black;
    h1{
        padding:8px;
    }
`
const CarrinhoProdutos = styled.div`
    display:grid;
    padding:8px;
    // teste para enxergar a posição

`

class Carrinho extends React.Component {
    // pegarValorTotal = () => {
    //     let ValorTotal = 0
        
        
    // }
    render() {
        return (
            <ContainerCarrinho>
                <h1>🛒 Carrinho:</h1>
                <CarrinhoProdutos>
                    <ItemCarrinho />
                    <p>Valor Total: R$</p>
                </CarrinhoProdutos>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho
