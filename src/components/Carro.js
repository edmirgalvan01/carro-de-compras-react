import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
   carro: {
      backgroundColor: '#359A2C',
      color: '#FFFFFF',
      border: 'none',
      padding: '15px',
      borderRadius: '15px',
      cursor: 'pointer',
   },
   bubble: {
      left: '12px',
      top: '20px',
      position: 'relative',
   },
};

class Carro extends Component {
   render() {
      const { carro, esCarroVisible, mostrarCarro } = this.props;
      //Sumamos la cantidad de productos que tiene en el carrito
      const cantidad = carro.reduce(
         (acumulador, elemento) => acumulador + elemento.cantidad,
         0
      );

      return (
         <div>
            <span style={styles.bubble}>
               {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
            </span>
            <button onClick={mostrarCarro} style={styles.carro}>
               Carro
            </button>
            {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
         </div>
      );
   }
}

export default Carro;
