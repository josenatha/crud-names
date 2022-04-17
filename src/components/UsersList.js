import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { UserCard } from './UserCard'
import { UserForm } from './UserForm'
import ModalComponent from './modal/ModalComponent'
export const UsersList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(`https://users-crud1.herokuapp.com/users/`)
            .then(({ data }) => setData(data))
    }, [])
   
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div>
                <h1> Usuarios</h1>
                <button onClick={() => setShowModal(true)}>+  crear nuevo</button>
            </div>

            {
                data && data.map((data) =>
                    <UserCard key={data.id} id={data.id} lastName={data.last_name} firstName={data.first_name} email={data.email} birday={data.birthday} />
                )
            }
            <ModalComponent show={showModal} setShow={setShowModal}>

                <UserForm setShow={setShowModal} />
            </ModalComponent>
        </div>

    )
}
