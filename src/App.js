import React from 'react';
import Produtos from './components/Produtos';
import Filtro from './components/Filtro';
import styled from 'styled-components';
import Tela from './components/Produtos';
import Cabeçalho from './components/Produtos';
import ContainerProduto from './components/Produtos';
import Cards from './components/Produtos';
import Rodape from './components/Produtos';


export default class App extends React.Component {

 render(){   
    return (
        <Tela>
            <Cabeçalho>
                <h1>Espaço Animado</h1>
                <input type="text" placeholder="O que você procura?" id="campoBusca" />
            </Cabeçalho>

            <ContainerProduto>        
                <Cards>
                    <Produtos
                        img={"https://images-na.ssl-images-amazon.com/images/I/71N2oMlL-IL._AC_SL1500_.jpg"} alt="Brinquedo Ônibus Espacial"
                        nome={"Ônibus Espacial"}
                        preco={"129.99"}
                    />
                    <Produtos
                        img={"http://blogdebrinquedo.com.br/wp-content/uploads/2014/09/ET-Pop-Vinyl-Figures-02.jpg"} alt="Boneco Extraterreste"
                        nome={"Boneco Extraterreste"}
                        preco={"199.99"}
                    />
                    <Produtos
                        img={"http://blogdebrinquedo.com.br/wp-content/uploads/2009/10/Inflatable-Solar-System-Set.jpg"} alt="Brinquedo Sistema Solar Inflável"
                        nome={"Sistema Solar Inflável"}
                        preco={"299.99"}
                    />
                    <Produtos
                    img={"https://images.tcdn.com.br/img/img_prod/681204/quebra_cabeca_educativo_sistema_solar_brinquedo_planetas_ciencias_893_1_be8a12385c97fb3d57a24486462fbb31.jpg"} alt="Quebra-cabeça Sistema Solar"
                    nome={"Quebra-cabeça Sistema Solar"}
                    preco={"59.99"}
                    />
                    <Produtos
                        img={"https://www.dhresource.com/0x0/f2/albu/g8/M00/91/48/rBVaVF18Pm6APiQdAALVO_ymJoE091.jpg/vintage-space-ship-model-clockwork-wind-up.jpg"} alt="Brinquedo Nave Espacial"
                        nome={"Nave Espacial"}
                        preco={"159.99"}
                    />
                    <Produtos
                        img={"https://images-na.ssl-images-amazon.com/images/I/51ARCDCFK2L._AC_SL1000_.jpg"} alt="Brinquedo Robô"
                        nome={"Robô"}
                        preco={"119.99"}
                    />
                    <Produtos
                        img={"https://static.turbosquid.com/Preview/2019/10/12__04_31_41/001_Alien_Ufo_Toy_Signature.pngE9025424-20D0-4373-8946-B10C94345201Large.jpg"} alt="Brinquedo OVNI"
                        nome={"OVNI"}
                        preco={"199.99"}
                    />
                    <Produtos
                        img={"https://images-na.ssl-images-amazon.com/images/I/61%2B-TQBECbL._AC_SX425_.jpg"} alt="Boneco Alien"
                        nome={"Alien"}
                        preco={"169.99"}
                    />            
                </Cards>        
            </ContainerProduto>

            <Rodape>
                <h4>Redes Sociais</h4>
            </Rodape>
        </Tela>   
    );
 }
}


