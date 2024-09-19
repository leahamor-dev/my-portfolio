import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './components/body';
import Footer from './components/footer';
import { useDispatch } from 'react-redux';
import { fetchData } from './actions';
import SpinnerComponent from './components/Shared/Spinner';

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchData()).then((res) => {
        if (res.success) {
          setIsLoaded(true);
        }
      });
    }
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="App">
          <div className="h-100">
            <Main />
            <Footer />
          </div>
        </div>
      ) : (
        <SpinnerComponent />
      )}
    </>
  );
};

export default App;
