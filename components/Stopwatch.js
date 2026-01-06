import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Stopwatch.module.css';
import TimerDisplay from './TimerDisplay';
import ControlButtons from './ControlButtons';
import DarkModeToggle from './DarkModeToggle';

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.darkContainer : ''}`}>
      <div className={`${styles.card} ${isDarkMode ? styles.darkCard : ''}`}>
        <h1>Stopwatch</h1>
        <TimerDisplay time={time} isRunning={isRunning} hasStarted={hasStarted} isDarkMode={isDarkMode} />
        <ControlButtons
          isRunning={isRunning}
          startStopwatch={startStopwatch}
          stopStopwatch={stopStopwatch}
          resetStopwatch={resetStopwatch}
          isDarkMode={isDarkMode}
        />
        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Stopwatch;
