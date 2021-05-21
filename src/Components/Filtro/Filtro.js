import React from 'react';
import styled from 'styled-components';

const ContainerFiltro = styled.div`
display:flex;
flex-direction:column;
height:100vh;
width:100%;
border-right:2px solid black;
h3{
    padding:8px;
}`

const ContainerConteudo = styled.div`
display:grid;
justify-content:left;
padding:4px;
// border:1px solid black;
`
export default class Filtro extends React.Component {
    render() {
        return (
            <ContainerFiltro>
                <ContainerConteudo>
                    <h3>Filtro:</h3>
                    <p>Valor mínimo:</p>
                    <input type="number"></input>
                    <p>Valor Máximo:</p>
                    <input type="number"></input>
                    <p>Busca por nome:</p>
                    <input type="text"></input>
                </ContainerConteudo>

            </ContainerFiltro>

        );
    }
}

