import logo from './logo.svg';
import './App.css';

function App() {
  function send() {
    return fetch('https://cryptic-reaches-60555.herokuapp.com/api/someone')
  }

  return (
    <div>
      Отправить запрос
      <button onClick={send}>Send</button>

     
    </div>
  )
}

export default App;