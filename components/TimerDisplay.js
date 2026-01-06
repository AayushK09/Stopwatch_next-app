import styles from '../styles/Stopwatch.module.css';

const TimerDisplay = ({ time, isRunning, hasStarted, isDarkMode }) => {
  const formatTime = (time, showMilliseconds) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);

    if (hours === 0) {
      return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}${showMilliseconds ? `.${Math.floor(milliseconds / 10).toString().padStart(2, '0')}` : ''}`;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}${showMilliseconds ? `.${Math.floor(milliseconds / 10).toString().padStart(2, '0')}` : ''}`;
  };

  return (
    <div className={`${styles.timer} ${isDarkMode ? styles.darkTimer : ''}`}>
      {formatTime(time, isRunning || hasStarted)}
    </div>
  );
};

export default TimerDisplay;
