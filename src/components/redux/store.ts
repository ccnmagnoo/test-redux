import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { pokeReducer } from './pokeDucks';

const rootReducer = combineReducers({
  elementoPoke: pokeReducer,
});
/** @param combineReducers({}) se incorporan todos los reducers en los DUCKs */

export type AppState = ReturnType<typeof rootReducer>;
/** @param AppState type of returning or store */

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/** @param composeEnhacer configura el DevTools en el explorador */

export function generateStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}
/**
 * @param generateStore() se incropora el @param createStore() de redux
 * @param composeEnhancers() se incorpora el middleware para enviar al Devtool en el browser
 * */
