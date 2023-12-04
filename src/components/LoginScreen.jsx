import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../actions/jobActions'

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        dispatch(login(email, password));
    }

  return (
    <div>
      <input 
      type="text"
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      />

      <input 
      type="password"
      placeholder='Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginScreen
