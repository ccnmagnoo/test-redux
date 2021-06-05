import * as React from 'react';
import { Fragment } from 'react';
import { PropsSujeto } from './PropsEnComponentes';

export const Comentarios = (props: PropsSujeto): JSX.Element => {
  //const imgSrc ='https://i.pinimg.com/originals/1e/01/12/1e01125d84687049c4f28ad773ae8a90.jpg';
  return (
    <Fragment>
      <h2>Comentarios</h2>
      <hr />
      <div className='media ml-5 mr-5'>
        <img
          className='mr-3'
          src={props.sujeto.urlImagen}
          alt='Pollito Popipo'
          height='100'
          width='100'
        />
        <div className='media-body'>
          <h6 className='mt-5'>{props.sujeto.nombre}</h6>
          {props.sujeto.texto}
        </div>
      </div>
    </Fragment>
  );
};
