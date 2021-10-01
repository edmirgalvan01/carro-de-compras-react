import { Component } from 'react';
import Productos from './components/Productos';

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
            <Productos
               agregarAlCarro={() => console.log('No hace nada')}
               productos={this.state.productos}
            />
         </div>
      );
   }
}

export default App;
