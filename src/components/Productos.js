import { Component } from 'react';

class Productos extends Component {
   render() {
      const { productos, agregarAlCarro } = this.props; //Definimos las propiedades del componente

      return (
         <div>
            {productos.map((producto) => (
               <Producto
                  agregarAlCarro={agregarAlCarro}
                  key={producto.name}
                  producto={producto}
               />
            ))}
         </div>
      );
   }
}

export default Productos;
