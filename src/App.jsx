import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccountClick = () => {
    setIsAccountCreated(prevState => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleAuthClick = () => {
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <>
      <div className='main'>
        <h1>Login Signup Page</h1>
        {!isLoggedIn ? (
          <>
            <form className='form'>
              <input
                className='input'
                type="text"
                name="username"
                value={username}
                placeholder='Enter your username'
                onChange={handleInputChange}
              />
            </form>

            <form className='form'>
              <input
                className='input'
                type="password"
                name="password"
                value={password}
                placeholder='Enter your password'
                onChange={handleInputChange}
              />
            </form>

            <div>
              <button className='btn' onClick={handleAuthClick}>
                {isAccountCreated ? 'Login' : 'Signup'}
              </button>
            </div>
            
            <div>
              <button className='btn_1' onClick={handleAuthClick}>
                {isAccountCreated ? 'Login with Google' : 'Signup with Google'}
              </button>
            </div>

            <div>
              <button className='btn_2' onClick={handleCreateAccountClick}>
                Create Account
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2>Welcome, {username}!</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

