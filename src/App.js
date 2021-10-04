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
    <br />
     <a href="https://pay.fondy.eu/s/PN1WJ9UIGSX6qM">Оплатить что-то</a>
    </div>
  )
}

export default App;