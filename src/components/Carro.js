import { Component } from 'react';
import BubbleAlert from './BubbleAlert';

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
      return (
         <div>
            <span style={styles.bubble}>
               <BubbleAlert />
            </span>
            <button style={styles.carro}>Carro</button>
         </div>
      );
   }
}

export default Carro;
