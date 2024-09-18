import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect } from 'react';
import Main from './components/body';
import Footer from './components/footer';
import { useDispatch } from 'react-redux';
import { fetchData } from './actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
};

export default App;
