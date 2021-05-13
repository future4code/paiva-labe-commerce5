import React from 'react';
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
        return(
        this.props.products.map((product)=>{
        console.log(product)
        return <CardDeProduto>
            <img src={product.imagem} />
                <CardInfo key={product.id}>
                    <p>{product.nome}</p>
                    <p>R$ {product.preço},00</p>
                    <button>Adicionar ao Carrinho</button>
                </CardInfo>
            </CardDeProduto>
            })
        )
    }
}