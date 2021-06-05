import { useState } from 'react';
import { Fragment } from 'react';
import { UserTable } from './AppCRUD.table';
import { v4 as uuidv4 } from 'uuid';
import { UserAdd } from './AppCRUD.adduser';

export interface UserData {
  id: string;
  nombre: string;
  username: string;
}

export const AplicacionCrud = (): JSX.Element => {
  //init
  const userData: Array<UserData> = [
    { id: uuidv4(), nombre: 'Toto', username: 'Africa' },
    { id: uuidv4(), nombre: 'BeachBoys', username: 'Surfing' },
    { id: uuidv4(), nombre: 'Wololo', username: 'Hohohoho' },
  ];

  //state
  const [users, setUsers] = useState<Array<UserData>>(userData);

  //addd user
  function agregarUsuario(user: UserData) {
    user.id = uuidv4();
    setUsers([...users, user]);
  }

  function borrarUsuario(user: UserData) {
    console.log(`borrando: ${user.id}`);
    const useFilter = users.filter(
      (item) => item.id !== user.id
    ); /*lista excluyendo a todos los items que sean disitintos a la ID objetivo*/
    setUsers(useFilter);
  }

  function actualizarUsuario(user: UserData) {
    console.log(`actualizando: ${user.id}`);
  }

  //effect <Hook></Hook>

  return (
    <Fragment>
      <h2>Aplicación Crud</h2>
      <p>
        Tutorial{' '}
        <a
          href='https://www.youtube.com/watch?v=8rLs-AGn4go&list=PLPl81lqbj-4KswGEN6o4lF0cscQalpycD&index=10&ab_channel=Bluuweb%21Bluuweb%21Verified'
          target='_blank'
          rel='noreferrer'>
          {' '}
          Bluuweb
        </a>
      </p>
      <hr />
      <div className='container px-4 bg-light text-dark'>
        <div className='row mr-3 ml-3'>
          <div className='col'>
            {/*sección de adicionado de usuarios*/}
            <h4>Add User</h4>
            <UserAdd funcion={agregarUsuario} />
            {/*se pueden pasar props directamente sean funciones*/}
          </div>
          <div className='col'>
            {/*listado de usuarios inscritos*/}
            <h4>View user</h4>
            <UserTable
              users={users}
              test={100}
              borrar={borrarUsuario}
              actualizar={actualizarUsuario}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
