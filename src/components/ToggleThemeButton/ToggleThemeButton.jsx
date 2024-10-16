import styles from './ToggleThemeButton.module.css';
import React from 'react';

function ToggleThemeButton({ toggleTheme, isDarkMode }) {
  return (
    <div>
      <button onClick={toggleTheme} className={isDarkMode ? styles.darkMode : styles.lightMode}>
        {isDarkMode ? 'Modo Claro' : 'Modo Nocturno'}
      </button>
    </div>
  );
}

export default ToggleThemeButton;