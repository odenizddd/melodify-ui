import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='login-card'>
        <p className='login-prompt'>Login to Melodify.</p>
        <input placeholder='Username'></input>
        <input placeholder='Password'></input>
        <button>Sign In</button>
      </div>
    </>
  );
}

export default App;
