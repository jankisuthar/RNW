import React from 'react';
import { useState, useEffect } from 'react';
import firestore from "../firebase/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

function CRUD(props) {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [id, setId] = useState('')

    const [show, setShow] = useState(false)
    const [val, setVal] = useState([])
    const value = collection(firestore, "demo")

  
    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value)
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData()
    })

    const handleCreate = async () => {
        await addDoc(value, { name1: fname, name2: lname })
        setFname("")
        setLname("")
    }

    const handleDelete = async (id) => {
        const deleteVal = doc(firestore, "demo", id)
        await deleteDoc(deleteVal)
    }

    const handleEdit = async (id, name1, name2) => {
        setFname(name1)
        setLname(name2)
        setId(id)
        setShow(true)
    }

    const handleUpdate = async () => {
        const updateData = doc(firestore, "demo", id)
        await updateDoc(updateData, { name1: fname, name2: lname })
        setShow(false)
        setFname("")
        setLname("")
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6">
                    <input value={fname} onChange={(e) => setFname(e.target.value)} />
                    <input value={lname} onChange={(e) => setLname(e.target.value)} />
                    {!show ? <button onClick={handleCreate} className='btn btn-success'>Create</button> :
                        <button onClick={handleUpdate} className='btn btn-warning'>Update</button>}
                </div>

                <div className="col-6">
                <table className='table-bordered'>
                    <th width={100}>Name</th>
                    <th  width={100}>Password</th>
                    <th  width={100}>delete</th>
                    <th  width={100}>Update</th>
                    {
                        val.map(values =>
                           
                                <tr>
                                <td>{values.name}</td>
                                <td>{values.password}</td>
                                <td><button className="btn btn-primary" onClick={() => handleDelete(values.id)}>Delete</button></td>
                                <td><button className='btn btn-success' onClick={() => handleEdit(values.id, values.name1, values.name2)}>Edit</button></td>
                                </tr>
                           )
                    }
                     </table>
                </div>
            </div>

        </div>
    );
}

export default CRUD;