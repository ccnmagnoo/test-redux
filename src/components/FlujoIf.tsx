import React, { Fragment } from 'react';
import { useState } from 'react';

export const FlujoIf = (): JSX.Element => {
  const urlTutorial = 'https://youtu.be/TKHrZ3AItHY';

  //hooks
  const [temperatura, setTemperatura] = useState({ temperatura: 20 });
  const isInRange = (value: number, max: number, min: number): boolean => {
    return value >= min && value < max;
  };

  const frioYcalor = (temperatura: number): string => {
    switch (true) {
      case isInRange(temperatura, 30, 20): {
        return 'hayyyyy';
      }
      case isInRange(temperatura, 20, 18): {
        return 'caluroso';
      }
      case isInRange(temperatura, 18, 10): {
        return 'frio';
      }
      case isInRange(temperatura, 10, 0): {
        return 'se me congelan las bolas';
      }
      default: {
        return `yo creo que hay un 
        problema con tu percepción
        de la temperatura`;
      }
    }
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(`cambio de temperatura detectado: ${event.target.value}`);
    setTemperatura({ ...temperatura, [event.target.name]: event.target.value });
  }

  return (
    <Fragment>
      <h3>Prueba Flujo If en JSX</h3>
      <p>
        tutorial{' '}
        <a href={urlTutorial} target='_blank' rel='noreferrer'>
          {' '}
          Bluuweb #2 If & array con JSX
        </a>{' '}
      </p>
      <input
        type='number'
        max='40'
        min='-1'
        name='temperatura' /*esto indica el parámetro que se debe fijar el onChange*/
        onChange={handleInputChange}
        placeholder='ingrese temperatura'
      />
      <p>La temperatura actual es {temperatura.temperatura}°C</p>
      <p className='display-6'>Respuesta: {frioYcalor(temperatura.temperatura)}</p>
    </Fragment>
  );
};
