import React from 'react';
import styled from 'styled-components'

const ContainerDoItem = styled.div`
    display: grid;
    grid-auto-flow:column;
    gap:10px;
    align-items:center;
`

class ItemCarrinho extends React.Component {
    render() {
        return (
            <ContainerDoItem>
                <p>{this.props.produtos.quantidade}x</p>
                <p>{this.props.produtos.nome}</p>
                <button onClick={()=> this.props.onRemoverCarrinho(this.props.produtos.id)}>Remover</button>
            </ContainerDoItem>
        )
    }
}

export default ItemCarrinho