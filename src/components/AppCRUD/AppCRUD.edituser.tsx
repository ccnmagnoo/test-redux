import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { UserData } from './AppCRUD';

export const UserEdit = (props: {
  funcion: (user: UserData) => void;
  usuario: UserData;
}): JSX.Element => {
  //react hook from
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: { nombre: string; username: string }) => {
    const userData: UserData = { id: props.usuario.id, ...data };
    props.funcion(userData);
    reset(); /*limpieza de campos del formulario*/
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon1'>
            🌞
          </span>
          <input
            className='input-group-text '
            type='text'
            placeholder='nombre'
            {...register('nombre', { required: true })}
          />
          {errors.nombre && <span className='m-1'>obligatorio chaval 👮‍♀️</span>}
        </div>

        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon1'>
            🌜
          </span>
          <input
            className='input-group-text '
            type='text'
            placeholder='username'
            {...register('username', { required: true })}
          />
          {errors.username && <span className='m-1'>hey psss...esto también 🏓</span>}
        </div>
        <Fragment>
          <button type='submit' className='btn btn-primary m-1'>
            Editar a {watch('nombre')}
          </button>
        </Fragment>
      </form>
    </Fragment>
  );
};
