import React from 'react';
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

const products = [
  {
    id: 1,
    nome:'Alien',
    preço:12,
    imagem:'https://ae01.alicdn.com/kf/H7819810f703743f7850d0bb83791d9efu/Neca-alien-1979-xenomorph-pvc-action-figure-collectible-modelo-de-brinquedo.jpg '
  },
  {
    id:2,
    nome:'Nave Alienigina',
    preço:15,
    imagem:'https://static.turbosquid.com/Preview/2019/10/12__04_31_41/001_Alien_Ufo_Toy_Signature.pngE9025424-20D0-4373-8946-B10C94345201Large.jpg '
  },
  {
    id:3,
    nome:'Robô Espacial',
    preço:13,
    imagem:'https://images-na.ssl-images-amazon.com/images/I/51ARCDCFK2L._AC_SL1000_.jpg'
  },
  {
    id:4,
    nome:'Nave Tripulada',
    preço:24,
    imagem:'https://www.ofertaviva.com.br/photo-1/modelo-de-nave-espacial-do-vintage-clockwork-wind-up-brinquedos-de-lata-colecionaveis-para-criancas-adulto-presente.jpg'
  },
  {
    id:5,
    nome:'Quebra-Cabeça do Sistema Solar',
    preço:81,
    imagem:'https://images-na.ssl-images-amazon.com/images/I/A1HrNUofNLL._AC_SL1500_.jpg'
  },
  {
    id:6,
    nome:'Boneco E.T.',
    preço:32,
    imagem:'https://static3.tcdn.com.br/img/img_prod/460977/boneco_e_t_e_t_o_extraterrestre_head_knockers_37717_1_20201211173424.jpg'
  },
]


export default class App extends React.Component {
  state = {
    produtosNoCarrinho: [{
      id:1,
      nome:'Foguete Maneiro',
      preço:12,
      imagem:'https://www.bigjigstoys.co.uk/media/catalog/product/cache/b602cca0b1c302411eaf5cc7f6f3f5d1/b/j/bj815_pat7jddwnzb3wi35.jpg',
      quantidade:2
    },
    {
      id:2,
      nome:'Foguete Legal',
      preço:15,
      imagem:'https://www.bigjigstoys.co.uk/media/catalog/product/cache/b602cca0b1c302411eaf5cc7f6f3f5d1/b/j/bj815_pat7jddwnzb3wi35.jpg',
      quantidade: 1
    }]
    }

render(){   
  return (
    <AppContainer>
      {/* <Header /> */}
      <Filtro />
      <Produto 
      products= {products}/>
      <Carrinho />
      {/* <Footer /> */}
    </AppContainer>   
      
  );
 }
}


