import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="App">
        <div className="h-100">
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
