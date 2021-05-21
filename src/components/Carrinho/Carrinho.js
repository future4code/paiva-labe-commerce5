import React from 'react';
import styled from 'styled-components'
import ItemCarrinho from './ItemCarrinho';


const ContainerCarrinho = styled.div`
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
    display: flex;
    flex-direction:column;
    height:100vh;
    width:100%;
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

export default class Carrinho extends React.Component {
    pegarValorTotal = () => {
        let valorTotal = 0

        for (const products of this.props.produtosNoCarrinho) {
            valorTotal += products.quantidade * products.preço
        }
        return valorTotal
    }

    render() {
        const produtos = this.props.produtosNoCarrinho
        console.log(produtos)
        return (
            <ContainerCarrinho>
                <h1>🛒 Carrinho:</h1>
                <CarrinhoProdutos>
                    {this.props.produtosNoCarrinho.map((produto) => {
                        return <ItemCarrinho
                            produtos={produto}
                            onRemoverCarrinho={this.props.onRemoverCarrinho}
                        />
                    })}
                    <p>Valor Total: R${this.pegarValorTotal()},00</p>
                </CarrinhoProdutos>
            </ContainerCarrinho>
        )
    }
}

