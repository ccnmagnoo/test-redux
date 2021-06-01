import React from 'react';
import { Fragment } from 'react';

type Prefijo = 'Sr' | 'Sra' | 'Srta' | 'Dun';

export interface PropsSaludo {
  nombre: string;
  apellido: string;
  prefijo: Prefijo;
}

export const Saludos = (props: PropsSaludo): JSX.Element => {
  return (
    <Fragment>
      <h4>Saludos {props.nombre}</h4>
      <p>
        Estoy saludando al <strong>{props.prefijo}.</strong> {props.nombre}{' '}
        {props.apellido}
      </p>
    </Fragment>
  );
};
