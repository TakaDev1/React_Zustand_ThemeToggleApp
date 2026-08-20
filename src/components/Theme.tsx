import React from 'react';
import { useThemeStore } from '../stores/ThemeStore';

const Theme = () => {
    const {darkMode, toggleTheme} = useThemeStore()
  return (
    <div>
        <p>現在のテーマ: {darkMode ? 'ライト' : 'ダーク'}モード</p>
        <button onClick={toggleTheme} className='mt-5 px-5 py-2 bg-gray-800 hover:opacity-70 cursor-pointer text-lg font-bold rounded-xl'>テーマ切り替え</button>
    </div>
  );
};

export default Theme;