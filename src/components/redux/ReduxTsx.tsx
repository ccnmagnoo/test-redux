import { Fragment } from 'react';
import { Pokemones } from './Pokemones';
import { Provider } from 'react-redux';
import { generateStore } from './store';

export const ReduxTsx = (): JSX.Element => {
  //get store from
  const store = generateStore();

  //anexo no ref a REDUX
  const videos: { [parte: string]: [string, string] } = {
    parte1: [
      'https://www.youtube.com/watch?v=rdby50DQpRc&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=14&t=7s',
      ' instalando dependencias',
    ],
    parte2: [
      'https://www.youtube.com/watch?v=bvzFKYgBgTw&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=15&ab_channel=Bluuweb%21Bluuweb%21Verified',
      ' creando los ducks = action types + reducers + actions',
    ],
    parte3: [
      'https://www.youtube.com/watch?v=OSUEkoac0zA&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=16&ab_channel=Bluuweb%21Bluuweb%21Verified',
      ' configurado el Store.ts',
    ],
    parte4: [
      'https://www.youtube.com/watch?v=F2oDONZ9vik&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=17&ab_channel=Bluuweb%21Bluuweb%21Verified',
      ' consumiendo el redux al interior de React',
    ],
  };

  const videosRef = () => {
    let numeralIni = 13;
    const listaVideos: JSX.Element[] = [];

    for (let parte in videos) {
      ++numeralIni;
      listaVideos.push(
        <Fragment>
          <a href={videos[parte][0]} target='_blank' rel='noreferrer'>
            Bluuweb video {parte} #{numeralIni}
          </a>
          <p>{videos[parte][1]};</p>
        </Fragment>
      );
    }

    return listaVideos;
  };

  const encabezado: JSX.Element = (
    <Fragment>
      <h2>Redux Ts</h2>
      <h4>Store, Actions(functions), Reducers(handler) ,</h4>
      <p>tutorial como utilizar el framework de redux store</p>
      {videosRef()}
    </Fragment>
  );

  return (
    <Fragment>
      {encabezado}
      {/** todos los compomentes que requeran el STORE REDUX deben
       * ser envueltos en un PROVIDER de react-redux
       */}
      <Provider store={store}>
        <h1>Uso del Redux</h1>
        <Pokemones />
      </Provider>
    </Fragment>
  );
};
