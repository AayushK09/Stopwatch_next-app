import { useState, useRef } from 'react';
import styles from '../styles/Stopwatch.module.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      setHasStarted(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setHasStarted(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time, showMilliseconds) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);

    // Hide hours if time is less than 1 hour
    if (hours === 0) {
      return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}${showMilliseconds ? `.${Math.floor(milliseconds / 10).toString().padStart(2, '0')}` : ''}`;
    }

    // Show hours if time is 1 hour or more
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${showMilliseconds ? `.${Math.floor(milliseconds / 10).toString().padStart(2, '0')}` : ''}`;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.darkContainer : ''}`}>
      <div className={`${styles.card} ${isDarkMode ? styles.darkCard : ''}`}>
        <h1>Stopwatch</h1>
        <div className={`${styles.timer} ${isDarkMode ? styles.darkTimer : ''}`}>
          {formatTime(time, isRunning || hasStarted)}
        </div>
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
        <button onClick={toggleDarkMode} className={styles.toggle}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
