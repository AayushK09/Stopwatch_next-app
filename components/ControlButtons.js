import styles from '../styles/Stopwatch.module.css';

const ControlButtons = ({ isRunning, startStopwatch, stopStopwatch, resetStopwatch, isDarkMode }) => {
  return (
    <div className={styles.buttons}>
      {!isRunning ? (
        <button
          onClick={startStopwatch}
          className={`${styles.button} ${isDarkMode ? styles.darkButton : ''}`}
        >
          Start
        </button>
      ) : (
        <button
          onClick={stopStopwatch}
          className={`${styles.button} ${isDarkMode ? styles.darkButton : ''}`}
        >
          Stop
        </button>
      )}
      <button
        onClick={resetStopwatch}
        className={`${styles.button} ${isDarkMode ? styles.darkButton : ''}`}
      >
        Reset
      </button>
    </div>
  );
};

export default ControlButtons;
