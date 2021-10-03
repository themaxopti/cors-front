import logo from './logo.svg';
import './App.css';

function App() {
  function send () {
    return fetch('http://localhost:4000/api/someone')
  }

  return (
   <div>
     Отправить запрос
     <button onClick={send}>Send</button>
   </div>
  );
}

export default App;
