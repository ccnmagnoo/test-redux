//ducks es una motodología para meter ACTIONS/REDUCES/ACTION CREATOS en un solo archivo

//mis entornos

interface PokemonUrl {
  name: string;
  url: string;
}

//Datos iniciales en el store DUCKS
const datosIniciales: { listado: PokemonUrl[] } = {
  listado: [
    { name: 'pikachu', url: 'pikachu.com' },
    { name: 'bulbasaur', url: 'bulbasaur.com' },
  ],
};

//Acciones types
const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'; /*creando un type de action*/

//Reducers DUCKS🦆

/**
 * esta @param OBTENER es un type en acción
 * disparará el trigger para que el reducer incorpore datos al store
 */

export function pokeReducer(
  state = datosIniciales,
  action: { type: string; payload: PokemonUrl[] }
) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO: {
      return {
        ...state,
        //listado: [...state.listado, ...action.payload] /*ACUM actualizando el store STATE*/
        listado: action.payload /*replace*/,
      };
    }
    default: {
      return state;
    }
  }
}

//Acciones Ducks
/**
 * @function obtenerPokemonesAccion es una
 * función con doble capa ()=>()=>{}
 */

export const obtenerPokemonesAccion = () => async (dispatch: any, getState: any) => {
  try {
    //llamando a la api
    const api = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;
    type DatosApi = {
      count: string;
      next: string;
      previous: string;
      results: PokemonUrl[];
    };
    const llamado = await fetch(api);
    const datos: DatosApi = await llamado.json();
    const resultado = datos.results;
    console.log(datos);

    //haciendo el dispatch del action {type,payload}
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: resultado,
    });
  } catch (e) {
    console.log(e);
  }
};
