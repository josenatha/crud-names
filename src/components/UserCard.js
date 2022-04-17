import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import ModalComponent from './modal/ModalComponent'
import { UseFormEdit } from './UseFormEdit'
export const UserCard = ({ editData, id, firstName, lastName, email, birday }) => {
    const delate = () => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`);

    }
    const [showModal, setShowModal] = useState(false);
    const edit = () => {
        setShowModal(true)
    }

    return (
        <div>
            <h3>
                {`${firstName} ${lastName}`}

            </h3>
            <p>
                {email}
            </p>

            <p>
                {birday}
            </p>

            <form onSubmit={delate}>

                <button type='submit' />
            </form>


            <button onClick={edit} />

            <ModalComponent show={showModal} setShow={setShowModal}>

                <UseFormEdit setShow={setShowModal} id={id} />
            </ModalComponent>
        </div>
    )
}
