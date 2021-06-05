import * as React from 'react';

export interface IIntroProps {
  nombre: string;
  cargo?: string;
}

class IntroProps {
  private _nombre: string;
  cargo?: string;

  constructor(nombre: string, cargo?: string) {
    this._nombre = nombre;
    this.cargo = cargo;
  }

  get nombre(): string {
    return this._nombre;
  }
}

export class Intro extends React.Component<IntroProps> {
  miFuncion = (cargo?: string) => {
    if (cargo !== undefined) {
      return <p>Cargo registrado: {cargo}</p>;
    } else {
      return <p>Cargo indefinido </p>;
    }
  };

  render() {
    return (
      <div>
        <h5 className='App-intro'>
          <span>Prueba de paso de props: Prueba </span>
        </h5>
        <p>Personas Registrada: {this.props.nombre}</p>
        {this.miFuncion(this.props.cargo)}
      </div>
    );
  }
}
