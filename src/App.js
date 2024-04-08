import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="h-100">
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
