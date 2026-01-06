import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import styles from '../styles/Stopwatch.module.css';

const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <IconButton onClick={toggleDarkMode} className={styles.toggle}>
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default DarkModeToggle;
