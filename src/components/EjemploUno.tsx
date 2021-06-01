import { Fragment, useState } from 'react';
import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';

export type MisDatos = {
  titulo: string;
  descripcion: string;
};

//FORM RECT HOOK
export const EjemploUno = () => {
  const urlTutorial = `https://www.youtube.com/watch?v=-q-KYerZudM&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=8&ab_channel=Bluuweb%21Bluuweb%21Verified`;

  const [entradas, setEntradas] = useState<Array<MisDatos>>([]);

  //Definición de Form Hook
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MisDatos>();

  //on Submit
  const onSubmit: SubmitHandler<MisDatos> = (data: MisDatos, e) => {
    //console.log(data);
    //ingreso de variables
    setEntradas([...entradas, data]);
    console.log(entradas);
    //reseteo formulario y limpieza de campos
    //e?.target.reset();
    reset(); /* limpieza de campos */
  };

  //hook para ver "en tiempo real" el valor contenido en el form Hook
  const watchAllField = watch();

  return (
    <Fragment>
      <h1>Ejemplo Tutorial</h1>
      <p>
        {' '}
        tutorial{' '}
        <a href={urlTutorial} target='_blank ' rel='noreferrer'>
          {' '}
          Bluuweb #5 React Hook
        </a>
      </p>

      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <h6>Test pasando props EditText</h6>
        <EditText name='titulo' type='text' register={register} />
        <EditText name='descripcion' type='text' register={register} />

        <hr />
        <h6>Test React Hooks Form</h6>

        <div>
          <input
            type='text'
            className='form-control'
            id='validationCustom01'
            placeholder='ingrese titulo react hook form'
            {...register('titulo', {
              required: { value: true, message: 'debe ingresarse ⚠️' },
              maxLength: { value: 10, message: 'máximo 10 letras 🔻' },
              minLength: { value: 5, message: 'mínimo 5 letras 🔺' },
            })}
          />
          {errors.titulo && (
            <span className='input-group-text' id='inputGroupPrepend2'>
              {errors.titulo.message}
            </span>
          )}
        </div>

        <div>
          <input
            type='text'
            className='form-control'
            id='validationCustom01'
            placeholder='entre 5 a 10 letras'
            {...register('descripcion', {
              required: { value: true, message: 'debe ingresarse 💧' },
              maxLength: { value: 10, message: 'máximo 10 letras 💥' },
              minLength: { value: 5, message: 'mínimo 5 letras 🔥' },
            })}
          />

          {errors.descripcion && (
            <span className='input-group-text' id='inputGroupPrepend2'>
              {errors.descripcion.message}
            </span>
          )}
        </div>
        <hr />
        <button className='btn btn-info'>
          {' '}
          ingresar: watch() t:{watchAllField.titulo} d:{watchAllField.descripcion}{' '}
        </button>
      </form>
      <div>
        <h3>Entradas:</h3>
        <ul>
          {entradas.map((item, index) => {
            return (
              <li key={index}>
                {index} - {item.titulo} {item.descripcion}
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export const EditText = (props: EditTextProps) => {
  return (
    <Fragment>
      <input
        type={props.type}
        placeholder={`ingrese ${props.name}`}
        className='form-control my-2'
        {...props.register(props.name, {
          required: { value: true, message: 'debe ingresarse 🍄' },
          maxLength: { value: 10, message: 'máximo 10 letras 💆🏿‍♂️🔻' },
          minLength: { value: 5, message: 'mínimo 5 letras 🙅🏿‍♂️🔺' },
        })}
      />
    </Fragment>
  );
};

interface EditTextProps {
  name: 'titulo' | 'descripcion';
  type: 'text' | 'number';
  placeholder?: string;
  register: UseFormRegister<MisDatos>;
}
