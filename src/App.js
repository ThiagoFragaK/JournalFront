import './App.css';
import Header from './pages/header'
import Routes from './routes'


function App() {
  return (
    <div className="App">
      <Header />
      <div class="container-fluid">
        <br />
        <h1>Feed de Notícias</h1>
        <hr />
        <div class="row">
          <div class="row col-lg-12">
            <Routes />
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
