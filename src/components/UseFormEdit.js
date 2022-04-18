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
    }, [id])


    return (
        data && <form className="row g-3" onSubmit={env}>
            <input required defaultValue={data.first_name} />
            <input required defaultValue={data.last_name} />
            <input required type='email' defaultValue={data.email} />
            <input required defaultValue={data.password} />
            <input type='date' defaultValue={data.birthday} />
            <button type='submit' >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
            </button>
        </form>
    )
}
