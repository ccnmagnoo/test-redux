import { FormularioAuto } from './components/FormularioAt';
import { FlujoIf } from './components/FlujoIf';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Lista } from './components/Lista';
import { FormReactHook } from './components/FormularioRH';
import { useState, useEffect } from 'react';
import { EjemploUno } from './components/EjemploUno';
import { PasandoProps } from './components/PropsEnComponentes';
import { AplicacionCrud } from './components/AppCRUD';
import { uuid } from 'uuidv4';
import { RouterConApi } from './components/RoutConApis';
import React from 'react';
import { RouterReact } from './components/Routes';
import { ReduxTsx } from './components/redux/ReduxTsx';

export function App() {
  //contenedor de paginas
  type Page =
    | 'header'
    | 'formAuto'
    | 'formHook'
    | 'lista'
    | 'flujo'
    | 'intro'
    | 'ejemploUno'
    | 'pasandoProps'
    | 'aplicacionCrud'
    | 'router'
    | 'routerApi'
    | 'redux';

  const paginas: { [page: string]: JSX.Element } = {
    header: <Header />,
    fauto: <FormularioAuto />,
    formHook: <FormReactHook />,
    lista: <Lista />,
    flujo: <FlujoIf />,
    intro: <Intro nombre='Carlos Bar' cargo='Foo' />,
    ejemploUno: <EjemploUno />,
    pasandoProps: <PasandoProps />,
    aplicacionCrud: <AplicacionCrud />,
    router: <RouterReact />,
    routerApi: <RouterConApi />,
    redux: <ReduxTsx />,
  };

  //hook de paginas
  const [currentPage, setCurrentPage] = useState(<Header />);

  //selector de pagina por Key de el hash
  const pageSelect = (paginaSelectionada: Page) => {
    setCurrentPage(paginas[paginaSelectionada]);
  };

  useEffect(() => {
    console.log(uuid());
  }, []);

  //retorna array de botones dependiendo del contenido del hashmap paginas{}
  const arrayOfButtons = (): Array<JSX.Element> => {
    const buttons: Array<JSX.Element> = [];
    for (let key in paginas) {
      buttons.push(
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => pageSelect(key as Page)}>
          {key}
        </button>
      );
    }

    return buttons;
  };

  //importante: para pasar un onClick="", con una función esta debe ingresar como una fuction(){} o ()=>{ function() }
  return (
    <div className='App'>
      <header>
        <div className='btn-group' role='group' aria-label='Basic example'>
          {arrayOfButtons()}
        </div>
      </header>
      <body>
        <div className='card m-1'>{currentPage}</div>
      </body>
    </div>
  );
}
