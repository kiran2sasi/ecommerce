import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField';
import MyButton from './components/MyButton';

function App() {
  return (
    <div>
      <h1>SASI</h1>
      Enter First Name : <TextField/>
      Enter Last Name : <TextField/>
      <MyButton/>
    </div>
  )
}

export default App;
