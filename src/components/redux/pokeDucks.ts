//ducks es una motodología para meter ACTIONS/REDUCES/ACTION CREATOS en un solo archivo

//mis entornos

interface PokeApi {
  name: string;
  url: string;
}

//Datos iniciales en el store DUCKS
const inicializado: { listado: PokeApi[]; offset: number } = {
  listado: [],
  offset: 0,
};

//Acciones types 👀
const OBTENER_POKE = 'OBTENER_POKE'; /*creando un type de action*/
const SIGUENTE_POKE = 'SIGUENTE_POKE'; /*creando un type de action*/
const RETROCEDE_POKE = 'RETROCEDE_POKE'; /*creando un type de action*/

//REDUCER DUCKS🦆🦆
/**
 * esta @param OBTENER_POKE es un type en acción
 * disparará el trigger para que el reducer incorpore datos al store
 */

export function pokeReducer(
  state = inicializado,
  action: { type: string; payload: { listado: PokeApi[]; offset: number } }
) {
  switch (action.type) {
    //🦆👇👇
    case OBTENER_POKE: {
      return {
        ...state,
        //listado: [...state.listado, ...action.payload] /*ACUM actualizando el store STATE*/
        listado: action.payload.listado /*replace*/,
      };
    }
    //🦆👉👉
    case SIGUENTE_POKE: {
      return {
        ...state,
        listado: action.payload.listado,
        offset: action.payload.offset,
      };
    }
    //🦆👈👈
    case RETROCEDE_POKE: {
      return {
        ...state,
        listado: action.payload.listado,
        offset: action.payload.offset,
      };
    }
    default: {
      return state;
    }
  }
}

//Acciones ⌨️
/**
 * @function obtenerPokemonesAccion es una
 * función con doble capa ()=>()=>{}
 */

//👇👇
export const obtenerPokeAction = () => async (dispatch: any, getState: any) => {
  //descargar datos desde redux

  console.clear();
  console.log('store: ', getState());
  const offset: number = getState().poke.offset;

  //const offset: number = getState().elementosPoke.offset;

  try {
    //llamando a la api
    const datos = await llamado(offset);

    //haciendo el dispatch del action {type,payload}
    dispatch({
      type: OBTENER_POKE,
      payload: { listado: datos },
    });
  } catch (e) {
    console.log(e);
  }

  async function llamado(offset: number): Promise<PokeApi[]> {
    /**
     * función asincrona de llamado de api poke co
     */
    const api = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
    const llamado = await fetch(api);
    const datos: DatosApi = await llamado.json();
    console.log('api datos iniciales', datos);
    const resultados: PokeApi[] = datos.results;
    return resultados;
  }
};

//👉👉
export const siguientePokeAction = () => async (dispatch: any, getState: any) => {
  //get api: alterativa A: obtener offset y adicionarle 20
  const offsetNext: number = getState().poke.offset + 20;

  try {
    //api fetch
    const datos = await llamado(offsetNext);

    //dispatch
    dispatch({
      type: SIGUENTE_POKE,
      payload: { listado: datos, offset: offsetNext },
    });
  } catch (error) {
    console.log(error);
  }

  async function llamado(offset: number): Promise<PokeApi[]> {
    const api = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
    const llamado = await fetch(api);
    const datos: DatosApi = await llamado.json();
    console.log('api datos iniciales', datos);
    const resultados: PokeApi[] = datos.results;
    return resultados;
  }
};

//👈👈
export const retrocedePokeAction = () => async (dispatch: any, getState: any) => {
  //get api: alterativa A: obtener offset y adicionarle 20
  const offset = getState().poke.offset;
  const offsetNext: number = offset <= 0 ? 0 : offset - 20;

  try {
    //api fetch
    const datos = await llamado(offsetNext);

    //dispatch
    dispatch({
      type: SIGUENTE_POKE,
      payload: { listado: datos, offset: offsetNext },
    });
  } catch (error) {
    console.log(error);
  }

  async function llamado(offset: number): Promise<PokeApi[]> {
    const api = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
    const llamado = await fetch(api);
    const datos: DatosApi = await llamado.json();
    console.log('api datos iniciales', datos);
    const resultados: PokeApi[] = datos.results;
    return resultados;
  }
};

type DatosApi = {
  count: string;
  next: string;
  previous: string;
  results: PokeApi[];
};
