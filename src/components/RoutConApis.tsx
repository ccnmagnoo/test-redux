import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import { CivilizacionTsx } from './RoutConApi.Civilizacion';

export const RouterConApi = (): JSX.Element => {
  //Hooks de react↩️
  ///use states
  const [civilizaciones, setCivilizaciones] = useState<Array<Civilizacion>>([]);
  //use effect
  useEffect(() => {
    console.clear();
    console.log('useEffect is on');
    obtenerDatos();
  }, []);

  //llamando a api🗺️
  const obtenerDatos = async () => {
    const llamado = await fetch(
      'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
    );
    const civilizaciones: { civilizations: Array<Civilizacion> } = await llamado.json();
    console.log(civilizaciones);
    setCivilizaciones(civilizaciones.civilizations);
  };

  //🤦‍♂️titulos  de la pagina
  const urlTutorial = {
    parte1:
      'https://www.youtube.com/watch?v=lkpXNa2ZIjY&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=12&ab_channel=Bluuweb%21Bluuweb%21Verified',
    parte2:
      'https://www.youtube.com/watch?v=Q9YClZMj9-M&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=13&ab_channel=Bluuweb%21Bluuweb%21Verified',
  };

  const titulo: JSX.Element = (
    <Fragment>
      <h2>Routers consumiendo API</h2>
      <h4>Mostrar en la barra del navegador links</h4>
      <p>
        tutorial como vincular rutas de la página con datos
        <a href={urlTutorial.parte1} target='_blank' rel='noreferrer'>
          Bluuweb video #12
        </a>
        <span> </span>
        <a href={urlTutorial.parte2} target='_blank' rel='noreferrer'>
          Bluuweb video #13
        </a>
      </p>
    </Fragment>
  );

  return (
    <Fragment>
      {titulo}

      <BrowserRouter>
        <div className='container m-3 p-3'>
          <h1>Listado de civilizaciones del AOE II</h1>
          <div className='row align-items-start'>
            {/*contenedor botones y pantalla de detalle de civilizaciones */}
            <div className='col'>
              {/*selector de civ*/}
              <ul>
                <li>
                  <Link className='btn btn-primary' to='/inicio'>
                    home 🏡{' '}
                  </Link>
                </li>
                {/*map con retorno de array de <NavLink>*/}
                {civilizaciones.map((raza, index, listado) => {
                  return (
                    <li key={raza.id}>
                      <NavLink
                        to={`/civilizacion/${raza.id}/${raza.name}`}
                        className='btn btn-secondary p-1 m-1'
                        activeClassName='active'>
                        pueblo {index + 1} de {listado.length}{' '}
                        <strong>{raza.name}</strong>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='col'>
              {/*muestra detalles civ con el ruteador*/}
              <Switch>
                <Route path='/civilizacion/:id/:raza'>
                  {/** datos desde :id se pasa con HOOK useParams()*/}
                  <CivilizacionTsx />
                </Route>
                <Route path='/inicio' exact>
                  👈seleciona civilización
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

//extra
export interface Civilizacion {
  id: number;
  name: string;
  expansion: string;
  army_type: string;
  unique_unit: [string];
  unique_tech: [string];
  team_bonus: string;
  civilization_bonus: [string];
}
