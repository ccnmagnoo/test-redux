import { firebase } from './firebase.config';
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Fragment } from 'react';

type Datos = { id: string; index: number; nombre: string; fecha: Date };

export default function FirebaseApp() {
  //state hook con datos descargados de firebas
  const [tareas, setTareas] = useState<Datos[]>([]);
  //state con datos desde formularios
  const [tarea, setTarea] = useState<string>('');
  //modo edición
  const [modoEdicion, setModoEdicion] = useState(false);
  const [onEdition, setOnEdition] = useState<{ id: string; nombre: string } | undefined>(
    undefined
  );

  useEffect(() => {
    async function obtenerTareas() {
      console.clear();
      try {
        const db = firebase.firestore();
        const fetch = await db.collection('tareas').get();
        const data: Datos[] = fetch.docs.map((doc, index) => {
          const result: Datos = {
            id: doc.id,
            index: index,
            fecha: doc.data().fecha.toDate(),
            nombre: doc.data().nombre,
          };
          return result;
        });
        console.log('datos', data);
        setTareas(data);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerTareas();
  }, []);

  //➕➕➕
  const agregar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log('tarea vacía');
      return;
    }
    console.log(tarea);

    //subir a firebase🆕🎍
    try {
      const db = firebase.firestore();
      const nuevaTarea = {
        nombre: tarea,
        fecha: new Date(),
      };
      const data = await db.collection('tareas').add(nuevaTarea);
      //limpiando tarea
      setTarea('');
      console.log('tarea subida', nuevaTarea);
      //actualizando listado de tareas
      setTareas([...tareas, { id: data.id, index: tareas.length + 1, ...nuevaTarea }]);
    } catch (error) {
      console.log(error);
    }
  };

  //❌❌❌
  const eliminar = async (id: string) => {
    console.log('on Deleting', id);
    const db = firebase.firestore();
    await db.collection('tareas').doc(id).delete();
    console.log('Deleted', id);

    const filtro = tareas.filter((item) => item.id !== id);
    setTareas(filtro);
  };

  //♻️♻️♻️
  const editar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() /*evitar reset pagina*/;
    console.clear();
    console.log('on Editing');

    if (onEdition !== undefined) {
      try {
        //update firebase
        const db = firebase.firestore();
        await db.collection('tareas').doc(onEdition.id).update({ nombre: tarea });
        console.log('editado', onEdition.id);
        //update hook Tareas
        const actualizacion = tareas.map((item) =>
          item.id === onEdition?.id
            ? { id: item.id, index: item.index, fecha: item.fecha, nombre: tarea }
            : item
        );
        setTareas(actualizacion);
        //resetando edición OFF
        setModoEdicion(false);
        setOnEdition(undefined);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const modoEditor = async (id: string, nombre: string) => {
    console.clear();
    console.log('modo editor', id);
    setModoEdicion(true);
    setOnEdition({ id: id, nombre: nombre });
    console.log('modo editor', modoEdicion, id);
  };

  //COMPONENT🎆🎇
  return (
    <Fragment>
      <h2>App Firebase Crud</h2>
      <div className='container m-1 p-1'>
        <div className='row'>
          <div className='col-md-6'>
            {/* Listado de tareas*/}
            <h4>Listado de tareas 📖 en firebase 🔥</h4>
            <ul>
              {tareas.map((data) => {
                const fecha = data.fecha;
                return (
                  <li key={data.id}>
                    <div className='card m-1 p-1'>
                      {data.nombre} {fecha.toLocaleString('es-ES')}
                      <div className='p'>uuid:{data.id}</div>
                    </div>
                    <button
                      className='btn btn-warning btn-sm float-right mr-2'
                      onClick={() => modoEditor(data.id, data.nombre)}>
                      ✒
                    </button>
                    <button
                      className='btn btn-danger btn-sm float-right'
                      onClick={() => eliminar(data.id)}>
                      🗑
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='col-md-6'>
            {/* Formulario de tareas*/}
            <h4>Formulario de tareas 🖋 </h4>
            <form className='form-group' onSubmit={modoEdicion ? editar : agregar}>
              <input
                className='form-control'
                type='text'
                placeholder={modoEdicion ? 'edite tarea' : 'agrege tarea'}
                value={tarea}
                onChange={(e) => {
                  setTarea(e.target.value);
                }}
              />
              {/*cambio del modo del boto editor/agregar*/}
              <button
                className={modoEdicion ? 'btn btn-warning' : 'btn btn-primary'}
                type='submit'>
                {modoEdicion ? 'editar' : 'summit📡'}
              </button>
              {/*boton cancelar edición*/}
              {modoEdicion ? (
                <button
                  className='btn btn-alert'
                  onClick={() => {
                    setModoEdicion(false);
                    setOnEdition(undefined);
                  }}>
                  ❌
                </button>
              ) : (
                ''
              )}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
