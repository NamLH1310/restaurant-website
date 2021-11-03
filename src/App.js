import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';

function App() {
  return (
    <Router>
      <Router path="/">
        <HomeScreen />
      </Router>
    </Router>
  );
}

export default App;
