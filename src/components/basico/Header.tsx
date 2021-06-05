import * as React from 'react';
import logo from '../../../src/assets/test-logo.png';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} className='App-logo' alt='Logo' width='10%' height='10%' />
        <h4 className='App-title'>Bienvenido a esta pruebas</h4>
      </header>
    );
  }
}
