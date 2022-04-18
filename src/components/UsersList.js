import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { UserCard } from './UserCard'
import { UserForm } from './UserForm'
import ModalComponent from './modal/ModalComponent'
import '../style/style.css'
import { UseFormEdit } from './UseFormEdit'
export const UsersList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`https://users-crud1.herokuapp.com/users/`)
            .then(({ data }) => setData(data))
    }, [])
   
    const [showModal, setShowModal] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [id, setId] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-light color">

                <h1 > Usuarios</h1>
            <div >
                <button className="btn btn-outline-success" onClick={() => setShowModal(true)}>+  crear nuevo</button>
            </div>
            </nav>
            <div className='flex container '>

            {
                data && data.map((data) =>
                <UserCard key={data.id} setId={setId} editData={setShowModalEdit} id={data.id} lastName={data.last_name} firstName={data.first_name} email={data.email} birday={data.birthday} />
                )
            }
            </div>
            <ModalComponent show={showModal} setShow={setShowModal}>

                <UserForm setShow={setShowModal} />
            </ModalComponent>
            <ModalComponent show={showModalEdit} setShow={setShowModalEdit}>
                <UseFormEdit setShow={setShowModalEdit} id={id} />

            </ModalComponent>
        </div>

    )
}
