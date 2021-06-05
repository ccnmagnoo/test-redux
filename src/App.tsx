import { FormularioAuto } from './components/Formularios/FormularioAt';
import { FlujoIf } from './components/basico/FlujoIf';
import { Header } from './components/basico/Header';
import { Intro } from './components/basico/Intro';
import { Lista } from './components/basico/Lista';
import { FormReactHook } from './components/Formularios/FormularioRH';
import { useState, useEffect } from 'react';
import { EjemploUno } from './components/basico/EjemploUno';
import { PasandoProps } from './components/basico/PropsEnComponentes';
import { AplicacionCrud } from './components/AppCRUD/AppCRUD';
import { uuid } from 'uuidv4';
import { RouterConApi } from './components/Rutas/RoutConApis';
import { RouterReact } from './components/Rutas/Routes';
import { ReduxTsx } from './components/redux/ReduxTsx';
import FirebaseApp from './components/firebase/FirebaseApp';

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
    | 'redux'
    | 'firebaseCrud';

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
    firebase: <FirebaseApp />,
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
