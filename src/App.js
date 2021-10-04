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

      <a href="https://pay.fondy.eu/s/PN1WJ9UIGSX6qM" data-button="" class="f-p-b" style="--fpb-background:#dfdfdf; --fpb-color:#000000; --fpb-border-color:#000000; --fpb-border-width:1px; --fpb-font-weight:400; --fpb-font-size:16px; --fpb-border-radius:5px;">
        <i data-text="name">Оплатить</i>
        <i data-text="amount"> UAH</i>
      </a>
    </div>
  )
}

export default App;