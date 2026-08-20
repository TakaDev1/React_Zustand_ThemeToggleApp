
import './App.css'
import Theme from './components/Theme';
import { useThemeStore } from './stores/ThemeStore'

function App() {
  const {darkMode} = useThemeStore();

  return (
    <>
      <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? '' : 'bg-gray-400 text-black'}`}>
        <h1 className='!mb-20'>ThemeToggleApp</h1>
        <Theme />
      </div>
    </>
  )
}

export default App
