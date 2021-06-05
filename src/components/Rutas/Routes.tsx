import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import { FlujoIf } from '../basico/FlujoIf';
import { FormularioAuto } from '../Formularios/FormularioAt';
import { Header } from '../basico/Header';
import { Lista } from '../basico/Lista';

export const RouterReact = (): JSX.Element => {
  const urlTurorial = `https://www.youtube.com/watch?v=pp2ZmjTBB5M&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=11&t=751s&ab_channel=Bluuweb%21Bluuweb%21Verified`;
  const encabezado = (
    <div>
      <h2>Selecionando páginas enrutadas</h2>
      <h4>con react-routes-dom </h4>
      <p>👁️👁️👆 mira arriba en la barra de navegación</p>
      <p>
        Tutorial{' '}
        <a href={urlTurorial}>
          Bluuweb!! <strong>#11</strong>{' '}
        </a>{' '}
      </p>
    </div>
  );

  return (
    <Fragment>
      {encabezado}
      {/**parte en que se usa Router Dom*/}
      <BrowserRouter>
        {/** aquí en @param Router se definen las rutas y links
         * que apareceran en la barra del navegador
         * este apartado debe contener todo el router desde <App/> */}

        <div className='btn-group-lg'>
          <Link to='/' className='btn btn-success'>
            Inicio
          </Link>
          {/*Selector de Paginas*/}
          <NavLink to='/FormularioAuto' className='btn btn-danger'>
            Formulario Auto
          </NavLink>
          {/*Selector de Paginas*/}
          <NavLink to='/EjemploDeIf' className='btn btn-danger' activeClassName='active'>
            If Ejemplo
          </NavLink>
          {/*Selector de Paginas*/}
          <NavLink to='/Lista' className='btn btn-danger' activeClassName='active'>
            Lista
          </NavLink>
        </div>

        <div className='card m-2 p-5'>
          <Switch>
            {/** en el Switch se carga la pagina*/}
            {/*Carga de pagina*/}
            <Route path='/FormularioAuto'>
              <FormularioAuto />
            </Route>
            <Route path='/EjemploDeIf'>
              <FlujoIf />
            </Route>
            <Route path='/Lista'>
              <Lista />
            </Route>
            <Route path='/Lista'>
              <Header />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};
