import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Civilizacion } from './RoutConApis';

export const CivilizacionTsx = () => {
  /**IMPORTANTE: react router dom tiene su propio HOOK :useParam
   * sirve para pasar props VAR que vienen de un <Route path="/:VAR"> */

  //hook con datos props pasados de Route Path
  const ruta: { id: string; raza: string } = useParams();
  console.log(useParams());

  //Hooks normales
  const [civ, setCiv] = useState<Civilizacion | undefined>(undefined);
  useEffect(
    () => {
      irPorCivilizacion(ruta.id);
    },
    [ruta.id] /*useEffect se ejecutará cuando cambie el valor de ruta.id */
  );

  //fetch
  async function irPorCivilizacion(id: string) {
    console.clear();
    console.log(`llendo a buscar detalles de civilización id:${id}`);
    const llamando = await fetch(
      `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
    );
    const datosCivi: Civilizacion = await llamando.json();
    console.log(datosCivi);
    setCiv(datosCivi);
  }

  //TSX
  return (
    <Fragment>
      <h2>{ruta.raza}</h2>
      <h6>identificador {ruta.id}</h6>
      <hr></hr>
      <div className='card m-1 p-2'>
        <p>
          nombre: <strong>{civ?.name}</strong>
        </p>
        <p>tipo de armada: {civ?.army_type}</p>
        <p>expansión: {civ?.expansion ?? 'sin expasión'}</p>
        <p>bonus: {civ?.team_bonus}</p>
      </div>
    </Fragment>
  );
};
