import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
export const UseFormEdit = ({ id }) => {
    const [data, setData] = useState();
    const env = (e) => {
        e.preventDefault()

        const obj = {
            email: e.target[2].value,
            password: e.target[3].value,
            first_name: e.target[0].value,
            last_name: e.target[1].value,
            birthday: e.target[4].value,
        }
        axios.put(`https://users-crud1.herokuapp.com/users/${id}/`, obj)

        window.location.reload(true);
    }
    useEffect(() => {
        axios.get(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(({ data }) => setData(data))
    }, [])


    return (
        data && <form onSubmit={env}>
            <input required defaultValue={data.first_name} />
            <input required defaultValue={data.last_name} />
            <input required type='email' defaultValue={data.email} />
            <input required defaultValue={data.password} />
            <input type='date' defaultValue={data.birthday} />
            <button type='submit' />
        </form>
    )
}
