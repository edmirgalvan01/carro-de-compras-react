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
      carro: [],
      esCarroVisible: false,
   };

   agregarAlCarro = (producto) => {
      const { carro } = this.state;

      if (carro.find((x) => x.name === producto.name)) {
         const newCarro = carro.map((x) =>
            x.name === producto.name
               ? {
                    ...producto,
                    cantidad: x.cantidad + 1,
                 }
               : x
         );
         return this.setState({ carro: newCarro });
      }

      return this.setState({
         carro: this.state.carro.concat({
            ...producto,
            cantidad: 1,
         }),
      });
   };

   mostrarCarro = () => {
      this.setState({ esCarroVisible: !this.state.esCarroVisible }); //Cambiamos el valor de la propiedad
   };

   render() {
      return (
         <div>
            <Navbar carro={this.state.carro} />
            <Layout>
               <Title />
               <Productos
                  agregarAlCarro={this.agregarAlCarro}
                  productos={this.state.productos}
               />
            </Layout>
         </div>
      );
   }
}

export default App;
