import React from 'react';
// import './App.css';
import Filtro from './components/Filtro/Filtro';
import Carrinho from './components/Carrinho/Carrinho';
import Produto from './components/Produto/Produto';
import styled from 'styled-components'

const AppContainer = styled.div`
  display:grid;
  width:100%;
  grid-template-columns: 1fr 3fr 1fr;
  // grid-template-rows:150px 1fr 150px;
`


const Header = styled.div`
  position:fixed;
  top:0;
  width:100vw;
  background-color:red;
  grid-row:1/3;
`

export default class App extends React.Component {

render(){   
  return (
    <AppContainer>
      {/* <Header /> */}
      <Filtro />
      <Produto />
      <Carrinho />
      {/* <Footer /> */}
    </AppContainer>
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

//     <footer>
//         <h4>Redes Sociais</h4>
//     </footer>
// </div>
    
      
  );
 }
}


