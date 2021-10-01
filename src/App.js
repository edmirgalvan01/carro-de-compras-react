import { Component } from 'react';
import Productos from './components/Productos';

class App extends Component {
   state = {
      productos: [
         { nombre: 'Tomate', price: 20, img: '/productos/tomate.jpg' },
         { nombre: 'Arvejas', price: 15, img: '/productos/arveja.jpg' },
         { nombre: 'Lechuga', price: 30, img: '/productos/lechuga.jpg' },
      ],
   };
   render() {
      return (
         <div>
            <Productos
               agregarAlCarro={() => console.log('No hace nada')}
               productos={this.state.productos}
            />
         </div>
      );
   }
}

export default App;
