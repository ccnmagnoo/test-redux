import * as React from 'react';
import { Fragment } from 'react';
import { Comentarios } from './PropsComentarios';
import { Saludos } from './PropsSaludos';

export type Sujeto = {
  nombre: string;
  urlImagen: string;
  texto: string;
};

export type PropsSujeto = {
  sujeto: Sujeto;
};

export const PasandoProps = (): JSX.Element => {
  const urlTutorial = `https://www.youtube.com/watch?v=AIy9VqxXfBs&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=9&ab_channel=Bluuweb%21Bluuweb%21Verified`;

  //ejemplo de extración de componentes
  const sujeto: Sujeto = {
    nombre: 'Juanito',
    urlImagen:
      'https://i.pinimg.com/originals/1e/01/12/1e01125d84687049c4f28ad773ae8a90.jpg',
    texto: `     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mi placerat,
          imperdiet erat maximus, tincidunt enim. Donec eu dolor tempus, porttitor diam
          in, vehicula quam. Nam finibus, justo vitae.`,
  };

  return (
    <Fragment>
      <h2>Pasando props</h2>
      <p>
        tutorial link{' '}
        <a href={urlTutorial} target='_blank' rel='noreferrer'>
          Bluuweb #6 Props componentes
        </a>{' '}
      </p>
      <div className='flexbox'>
        <Saludos nombre='Juanito' apellido='Jojojose' prefijo='Sr' />
        <Saludos nombre='Pablus' apellido='Machuca' prefijo='Dun' />
        <Comentarios sujeto={sujeto} />
      </div>
    </Fragment>
  );
};
