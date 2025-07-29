import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './components/HomePage';

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
