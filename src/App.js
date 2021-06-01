// import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'Welcome to Trial React.js Project';
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>
          { title }
        </h1>
        <p>{ 10 }</p>
        <p>{ 'Hello' }</p>
        <p>{ [1,'a',3] }</p>
        <p>{ Math.random() }</p>
        <a href={ link }>Google site</a>
      </div>
    </div>
  );
}

export default App;
