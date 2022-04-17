import React from 'react'
import axios from 'axios'
export const UserForm = () => {
  const env = (e) => {


    const obj = {
      email: e.target[2].value,
      password: e.target[3].value,
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      birthday: e.target[4].value,
    }
    axios.post('https://users-crud1.herokuapp.com/users/', obj)


  }
  return (
    <form onSubmit={env}>
      <input required placeholder='First Name' />
      <input required placeholder='Last Name' />
      <input required type='email' placeholder=' Email' />
      <input required placeholder='Contraseña' />
      <input type='date' />
      <button type='submit' />
    </form>
  )
}
