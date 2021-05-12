import React from 'react';
import ProdutoCard from './ProdutoCard';
// import './App.css';
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


export default class Produto extends React.Component {

    render() {
        return (
            <Produtos>
                <TopoProduto>
                    <p>Quantidade de Produtos: 12</p>
                    <p>Ordenação:
             <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                     </p>

                </TopoProduto>
                <ProdutoCard />
            </Produtos>
            //     <div class="tela">
            //     <header>
            //         <h1>Espaço Animado</h1>
            //         <input type="text" placeholder="O que você procura?" id="campoBusca" />
            //     </header>

            //     <main>
            //         <div>

            //         </div>

            //         <section class="cards">
            //             <div class="produto card1" onclick="">
            //                 <img src="https://picsum.photos/400/400?a=1 " alt="" />
            //                 <h4>Nome do produto</h4>
            //             </div>
            //             <div class="produto card2" onclick="">
            //                 <img src="https://picsum.photos/400/400?a=2 " alt="" />
            //                 <h4>Nome do produto</h4>
            //             </div>
            //             <div class="produto card3" onclick="">
            //                 <img src="https://picsum.photos/400/400?a=3 " alt="" />
            //                 <h4>Nome do produto</h4>
            //             </div>
            //             <div class="produto card4" onclick="">
            //                 <img src="https://picsum.photos/400/400?a=4 " alt="" />
            //                 <h4>Nome do produto</h4>
            //             </div>
            //             <div class="produto card5" onclick="">
            //                 <img src="https://picsum.photos/400/400?a=5 " alt="" />
            //                 <h4>Nome do produto</h4>
            //             </div>
            //             <div class="produto card6" onclick="">
            //                 <img src="https://picsum.photos/400/400?a=6 " alt="" />
            //                 <h4>Nome do produto</h4>
            //             </div>
            //             <div class="produto card7" onclick="">
            //                 <img src="https://picsum.photos/400/400?a=7 " alt="" />
            //                 <h4>Nome do produto</h4>
            //             </div>
            //             <div class="produto card8" onclick="">
            //                 <img src="https://picsum.photos/400/400?a=8 " alt="" />
            //                 <h4>Nome do produto</h4>
            //             </div>
            //         </section>
            //     </main>

            // </div>
        );
    }
}


