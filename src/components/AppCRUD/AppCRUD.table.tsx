import React from 'react';
import { Fragment } from 'react';
import { UserData } from '../AppCRUD';
import { UserEdit } from './AppCRUD.edituser';

export const UserTable = (props: {
  users: UserData[];
  test: number;
  borrar: (userData: UserData) => void;
  actualizar: (userData: UserData) => void;
}): JSX.Element => {
  console.log(props.users);
  console.log(props.test);

  return (
    <Fragment>
      <div className='border p-3 m-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {props.users.length > 0 ? (
              props.users.map((user) => {
                let tag = user.id;
                let hashtag = `#${user.id}`;
                return (
                  <tr key={user.id}>
                    <td>{user.nombre}</td>
                    <td>{user.username}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-primary m-1'
                        data-bs-toggle='collapse'
                        data-bs-target={hashtag}
                        aria-expanded='false'
                        aria-controls='collapse'>
                        Edit 👉
                      </button>

                      {/*sección de despliege bajo el edit
                      BOOTstrap no va a funcionar bien con un render REACT
                      para esto se necesita react bootstrap o material-ui listo para REACT*/}

                      <div className='collapse' id={tag}>
                        <div className='card card-body'>
                          <h6>datos de actualización</h6>
                          <UserEdit funcion={props.actualizar} usuario={user} />
                        </div>
                      </div>

                      <button
                        type='button'
                        className='btn btn-danger m-1'
                        onClick={() => props.borrar(user)}>
                        {/*traspasando función de borrado al componente hijo*/}
                        Erase 😠
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3}> no users </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
