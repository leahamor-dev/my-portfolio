import { Spinner } from 'reactstrap';
import styles from './styles.module.css';

const SpinnerComponent = () => {
  const loopSpinner = () => {
    let spinnerArray = [];
    for (let i = 1; i <= 4; i++) {
      spinnerArray.push(
        <Spinner
          key={`spinner-${i}`}
          className={`${styles.spinner} mx-2 ${
            i % 2 == 0 ? styles.spinner_even : styles.spinner_odd
          }`}
          type={i % 2 == 0 ? 'border' : 'grow'}
        >
          Loading...
        </Spinner>
      );
    }
    return spinnerArray;
  };

  return <div className={styles.container}>{loopSpinner()}</div>;
};

export default SpinnerComponent;
