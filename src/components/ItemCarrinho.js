import React from 'react';
import styled from 'styled-components'

const ContainerDoItem = styled.div`
    display: grid;
    grid-auto-flow:column;
    gap:8px;
    align-items:center;
`

class ItemCarrinho extends React.Component {
    render() {
        return (
            <ContainerDoItem>
                <p>1x</p>
                <p>Produto</p>
                <button>Remover</button>
            </ContainerDoItem>
        )
    }
}

export default ItemCarrinho