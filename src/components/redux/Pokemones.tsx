import React from 'react';
import { Fragment } from 'react';
//importar HOOKS de Redux par react
/**
 * @param useDispatch para ejecturar acción crud
 * @param useSelector para leer datos
 */
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion as getPokeAction } from './pokeDucks';

/** @param extendiendo el tipado de RootState AppSta */
import { AppState } from './store';
declare module 'react-redux' {
  interface DefaultRootState extends AppState {}
}

export const Pokemones = (): JSX.Element => {
  //hook redux ejecutar acción
  const dispatch = useDispatch();
  //hook redux para buscar datos del store
  const obtenerDatosRedux = useSelector(({ elementoPoke }) => elementoPoke.listado);

  return (
    <Fragment>
      <h2>Listado de items</h2>
      <button className='btn btn-primary' onClick={() => dispatch(getPokeAction())}>
        obtener datos
      </button>
      <div className='card m-2 p-2'>
        <ul>
          {obtenerDatosRedux.map((item, index, array) => {
            return (
              <li key={item.name}>
                {' '}
                {item.name} api:{' '}
                <a href={item.url} target='_blank' rel='noreferrer'>
                  {' '}
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
