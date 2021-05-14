import React from 'react';
import styled from 'styled-components';

const ContainerFiltro = styled.div`
display:flex;
flex-direction:column;
height:100vh;
width:100%;
border-right:2px solid black;

h2{
    padding:8px;
}`

const ContainerConteudo = styled.div`
display:grid;
justify-content:left;
padding:4px;
margin-left:3px;

// border:1px solid black;
`
export default class Filtro extends React.Component {
    state = {
        valorMin: "10",
        valorMax: "900",
        busca:""

    };
    enterValorMin = (event) => {
       console.log(event.target.value);
        this.setState({ valorMin: event.target.value });
    };
    enterValorMax = (event) => {
        console.log(event.target.value);
        this.setState({ valorMax: event.target.value });
    };
    buscaNome = (event) => {
         console.log(event.target.value);
         this.setState({ busca: event.target.value });
     };
    /*precosEntre = (this.props.preço) => {
        // p deve estar entre valorMenor e valorMaior
        return this.props.preço.filter(p => valorMin <= p && p <= valorMax)
    }  */

    filtroValor = (props) => {
        const filtro = props.lista.filter((numero) => {
            if (numero > props.min) {
                return true
            }else{
                return false
            }    
        }).filter ((numero) => {
            if (numero < props.max) {
                return true
            }else{
                return false
            }    
        })

        console.log(filtro)

    };
    
    render() {
        const listaFiltrada = this.filtroValor(this.props)
        const products = this.props.products

        return (
            <ContainerFiltro>
                <ContainerConteudo>
                    <div className="App">
                        <h2>Filtro:</h2>
                        
                        <input 
                            type="number"
                            onChange={this.enterValorMin}
                            value={this.state.valorMin}
                            placeholder={"Valor Min."}
                        />
                        <input
                            type="number"
                            onChange={this.enterValorMax}
                            value={this.state.valorMax}
                            placeholder={"Valor Max."}
                        />
                        <input
                            type="text"
                            onChange={this.enterBusca}
                            value={this.state.valorBusca}
                            placeholder={"Busca"}
                         />
                         
                    </div>
                </ContainerConteudo>
            </ContainerFiltro>
        );
    }
}

