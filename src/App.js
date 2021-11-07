import './App.css';
import Navigation from './components/Navigation/Navigation';
import i18n from './services/i18n';

function App() {
  const lang = i18n.language;
  console.log('app', lang);
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
