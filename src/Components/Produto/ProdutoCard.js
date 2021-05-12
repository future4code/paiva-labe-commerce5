import React from 'react';
// import './App.css';
import styled from 'styled-components'

const CardDeProduto = styled.div`
    diplay:flex;    
    flex-direction:column;
    border: 2px solid black; 
    justify-content:center;
    align-items:center;  
    img{
        width:300px;
        height:300px;
    }
`
const CardInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:16px;
`

export default class ProdutoCard extends React.Component {

    render() {
        return (
            <CardDeProduto>
                <img src="https://www.bigjigstoys.co.uk/media/catalog/product/cache/b602cca0b1c302411eaf5cc7f6f3f5d1/b/j/bj815_pat7jddwnzb3wi35.jpg"/>
                <CardInfo>
                <p><strong>Foguete Maneiro</strong></p>
                <p>R$ 1230,00</p>
                <button>Adicionar ao Carrinho</button>
                </CardInfo>
            </CardDeProduto>
        )
    }
}