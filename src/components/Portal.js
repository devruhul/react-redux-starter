import React, { useReducer, useState } from 'react';
import { portalReduce } from '../reducers/portalReducer';
import { portalStore } from '../stores/portalStores';

const Portal = () => {
    const [state, dispatch] = useReducer(portalReduce, portalStore)
    const [name, setName] = useState('')
    const handleAddPatient = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: name
        })
        e.target.reset()
    }
    return (
        <div>
            <h2>hello portal</h2>
            <h3>Has patients : {state.patients.length}</h3>
            <form onSubmit={handleAddPatient}>
                <input required minLength={4} type="text" onChange={e => setName(e.target.value)} />
                <button>Add</button>
            </form>

            <h3>---------------</h3>
            {
                state.patients.map(patient => (<div key={patient.id}>

                    <h3>{patient.name}</h3>
                    <button onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: patient.id })}>X</button>
                </div>)
                )
            }
        </div>
    );
};

export default Portal;