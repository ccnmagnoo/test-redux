import * as React from 'react';
import { Fragment, useState } from 'react';

export const Lista = (): JSX.Element => {
  const [numero, setNumero] = useState<number | undefined>(0);
  const [listado, setListado] = useState<Array<number | undefined>>([]);

  function agregarElemento() {
    setNumero(numero === undefined ? 0 : numero + 1);

    setListado([numero, ...listado]);
  }

  const adaptador = (index: number, item?: number): JSX.Element => {
    return (
      //incorporar un key en listado
      <p key={index}>
        index: {index} content:{item}
      </p>
    );
  };

  return (
    <Fragment>
      <h2>Listado array</h2>
      <button onClick={agregarElemento} className='btn btn-warning'>
        {' '}
        agregar
      </button>
      {listado.map((item, index) => {
        return (
          <Fragment>
            <p key={index}>
              index: {index} content:{item}
            </p>
            {adaptador(index, item)}
          </Fragment>
        );
      })}
    </Fragment>
  );
};
