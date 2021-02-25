import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logUser = e => {
        e.preventDefault()

        if(!username || !password) {
            alert('Vous devez saisir un username et/ou un password')
            return
        }
        console.log(username + '  ' + password)
      }

  return (
    <div>

      <form onSubmit={logUser}>
        <label>
            UserName :
          <input
            name='username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          Password : 
           <input
            name='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit'> Add</button>
        </label>
      </form>
    </div>
  )
}

export default LoginForm