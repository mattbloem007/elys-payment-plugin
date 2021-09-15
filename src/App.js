import logo from './logo.svg';
import './App.css';
import Main from './pages/main'


function App({ domElement }) {
  const price = domElement.getAttribute("data-price")

  return (
    <div className="App">
    <p>
          My favorite price is /r/{price}
    </p>
      <Main />
    </div>
  );
}

export default App;
