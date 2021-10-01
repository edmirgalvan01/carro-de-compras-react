import { Component } from 'react';

const styles = {
   layout: {
      backgroundColor: '#FFF',
      color: '#0A283E',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
   },
   container: {
      width: '70%',
   },
};

class Layout extends Component {
   render() {
      return (
         //Nos aseguramos de imprimir todo lo que este dentrode layout
         <div style={styles.layout}>
            <div style={styles.container}>{this.props.children}</div>
         </div>
      );
   }
}

export default Layout;
