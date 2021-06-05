import * as React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';

export const FormularioAuto = (): JSX.Element => {
  const urlTutorial = `https://www.youtube.com/watch?v=8KuVE5JN8JQ&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=7&ab_channel=Bluuweb%21`;
  //hooks
  const [datos, setDatos] = useState({ nombre: '', apellido: '' });
  function nameFormat(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(`working: ${event.target.name}:${event.target.value}`);

    //update de los props onChange en la medida que se escriben
    setDatos({ ...datos, [event.target.name]: event.target.value });
  }

  function enviarDatos(event: React.FormEvent<HTMLFormElement>) {
    //previene la recarga de la pagina
    event.preventDefault();
  }
  //

  return (
    <Fragment>
      <h2>Formulario Autocompletado</h2>
      <p>
        tutorial link{' '}
        <a href={urlTutorial} target='_blank' rel='noreferrer'>
          Bluuweb #2
        </a>{' '}
      </p>
      <form className='row' onSubmit={enviarDatos}>
        <div className='col-md-3'>
          <input
            type='text'
            placeholder='Ingrese nombre'
            className='form-control'
            name='nombre' /*esto indica el parámetro que se debe fijar el onChange*/
            onChange={handleInputChange}
          />
        </div>

        <div className='col-md-3'>
          <input
            type='text'
            id=''
            placeholder='apellido'
            className='form-control'
            name='apellido' /*esto indica el parámetro que se debe fijar el onChange*/
            onChange={handleInputChange}
          />
        </div>

        <div className='col-md-3'>
          <button className='btn btn-primary .text-nowrap'>Enviar</button>
        </div>
      </form>
      <h4>Resultado</h4>

      <button className='btn btn-info'>
        ingresar {nameFormat(datos.nombre)} {nameFormat(datos.apellido)}
      </button>
    </Fragment>
  );
};
