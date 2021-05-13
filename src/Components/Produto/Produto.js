import React from 'react';
import ProdutoCard from './ProdutoCard';
import styled from 'styled-components'

const Produtos = styled.div`
    diplay:flex;
    flex-direction:column;
    height:100vh;
    padding:16px 20px 20px 16px;
`

const TopoProduto = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
const GridDeProdutos = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:8px;
`

export default class Produto extends React.Component {
    state = {
        ordena: 'DECRESCENTE'
    }
    getListaOrdenada = () => {
        return this.props.products.sort((a, b) => this.state.ordena === 'CRESCENTE' ? a.preço - b.preço : b.preço - a.preço)
    }

    onMudaLista = (event) => {
        this.setState({ ordena: event.target.value })
        console.log(this.onMudaLista)
    }
    render() {
        const listaOrdenada = this.getListaOrdenada()

        const products = this.props.products

        // console.log(products)
        return <Produtos>
            <TopoProduto>
                <p>Quantidade de Produtos:{this.props.products.length}</p>
                <p>Ordenação:
                    <select value={this.state.ordena} onChange={this.onMudaLista} >
                        <option value={'CRESCENTE'}>Crescente</option>
                        <option value={'DECRESCENTE'}>Decrescente</option>
                    </select>
                </p>

            </TopoProduto>
            <GridDeProdutos>
                <ProdutoCard
                    products={products}
                />



            </GridDeProdutos>
        </Produtos>
            ;
    }
}


