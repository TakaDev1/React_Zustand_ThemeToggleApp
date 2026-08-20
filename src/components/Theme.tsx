import React from 'react';
import { useThemeStore } from '../stores/ThemeStore';

const Theme = () => {
    const {darkMode, toggleTheme} = useThemeStore()
  return (
    <div>
        <p>現在のテーマ: {darkMode ? 'ライト' : 'ダーク'}モード</p>
        <button onClick={toggleTheme}>テーマ切り替え</button>
    </div>
  );
};

export default Theme;