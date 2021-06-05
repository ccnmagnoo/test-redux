import React, { Fragment } from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export const FormReactHook = (): JSX.Element => {
  //https://bluuweb.github.io/react-udemy/04-formularios/#state
  const url = `https://www.youtube.com/watch?v=wgutyeQTGDA&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=7&ab_channel=Bluuweb%21Bluuweb%21Verified`;

  //hooks
  const [texto, setTexto] = useState<Inputs>({ example: '', exampleRequired: '' });

  //React Hook Forms

  type Inputs = {
    example: string;
    exampleRequired: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setTexto(data);
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <Fragment>
      <h3>Formulario ReactHook</h3>
      <h5> escribe cualquier texto y en el valor B: ingrese 4 letras </h5>
      <p>
        video youtube{' '}
        <a href={url} target='_blank' rel='noreferrer'>
          {' '}
          Bluuweb #04 React Hook Form
        </a>
      </p>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='ingrese valor A'
          className='from-control my-2'
          {...register('example', { required: true })}
        />
        {errors.example && <span>This field is required</span>}
        <input
          type='text'
          placeholder='ingrese valor B'
          className='from-control my-2'
          {...register('exampleRequired', {
            required: true,
            pattern: /\w{5,}/,
          })}
        />
        {errors.exampleRequired && <span>at las 5 words</span>}

        <button className='btn btn-primary'> enviar Form React Hook </button>
      </form>
      <p>
        valor del objeto: example:<strong>{texto.example}</strong> example required:
        <strong>{texto.exampleRequired}</strong>
      </p>
    </Fragment>
  );
};
