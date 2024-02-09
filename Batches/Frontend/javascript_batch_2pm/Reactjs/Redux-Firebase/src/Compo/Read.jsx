import React, { useState,useEffect } from 'react';
import CRUD from './CRUD'
import {
    collection,
    query,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
  import firestore from '../firebase/firebase';

function Read(props) {
    const [newTitle, setNewTitle] = useState(CRUD.Subject);
    const handleChange = (e) => {
        e.preventDefault();
        if (CRUD.complete === true) {
          setNewTitle(CRUD.Subject);
        } else {
            CRUD.Subject = "";
          setNewTitle(e.target.value);
        }
      };
    return (
        <div className="todo">
      <input
        style={{ textDecoration: CRUD.completed && "line-through" }}
        type="text"
        value={CRUD.Subject === "" ? newTitle : CRUD.Subject}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(CRUD)}
        >
          {/* <CheckCircleIcon id="i" /> */}
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(CRUD, newTitle)}
        >
          {/* <EditIcon id="i" /> */}
        </button>
        <button className="button-delete" onClick={() => handleDelete(CRUD.id)}>
          {/* <DeleteIcon id="i" /> */}
        </button>
      </div>
    </div>
    );
}

export default Read;