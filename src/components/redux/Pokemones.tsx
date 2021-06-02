import React from 'react';
import { Fragment } from 'react';
//importar HOOKS de Redux par react
/**
 * @param useDispatch para ejecturar acción crud
 * @param useSelector para leer datos
 */
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokeAction, retrocedePokeAction, siguientePokeAction } from './pokeDucks';

/** @param extendiendo el tipado de RootState AppSta */
import { AppState } from './store';
declare module 'react-redux' {
  interface DefaultRootState extends AppState {}
}

export const Pokemones = (): JSX.Element => {
  //hook redux ejecutar redux action🔺🔺⚙️
  const dispatch = useDispatch();
  const play = {
    //tienen que ser arrow function
    obtener: () => dispatch(obtenerPokeAction()),
    siguiente: () => dispatch(siguientePokeAction()),
    retrocede: () => dispatch(retrocedePokeAction()),
  };

  //hook redux para buscar datos del store
  ////decarga listados desde store>poke>listados🔻🔻
  const obtenerListados = useSelector(({ poke }) => poke.listado);
  ////decarga offset desde store>poke>listados🔻🔻
  const obtenerOffset = useSelector(({ poke }) => poke.offset);

  return (
    <Fragment>
      <h2>Listado de items</h2>
      <button className='btn btn-primary' onClick={play.obtener}>
        obtener datos
      </button>

      {/*navegador*/}
      <div className='card p-1 m-1'>
        <div className='btn btn-group'>
          <button className='btn btn-primary' onClick={play.retrocede}>
            👈atrás
          </button>
          <div className='btn btn-primary'>{obtenerOffset}</div>
          <button className='btn btn-primary' onClick={play.siguiente}>
            siguiente👉
          </button>
        </div>
      </div>

      {/*listado*/}
      <div className='card m-2 p-2'>
        <ul>
          {obtenerListados.map((item, index, array) => {
            return (
              <li key={item.name}>
                {item.name}
                <a href={item.url} target='_blank' rel='noreferrer'>
                  json
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
