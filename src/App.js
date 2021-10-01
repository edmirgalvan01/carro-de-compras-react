import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title';

class App extends Component {
   state = {
      productos: [
         { name: 'Tomate', price: 20, img: '/productos/tomate.jpg' },
         { name: 'Arvejas', price: 15, img: '/productos/arbejas.jpg' },
         { name: 'Lechuga', price: 30, img: '/productos/lechuga.jpg' },
      ],
   };
   render() {
      return (
         <div>
            <Navbar />
            <Layout>
               <Title />
               <Productos
                  agregarAlCarro={() => console.log('No hace nada')}
                  productos={this.state.productos}
               />
            </Layout>
         </div>
      );
   }
}

export default App;
