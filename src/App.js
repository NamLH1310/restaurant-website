import {Route, Switch} from 'react-router-dom'
import './App.css';
import Employer from './Components/Employer'
import CheckOrder from './Components/CheckOrder';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Employer} />
      <Route exact path="/check" component={ CheckOrder}/>
    </Switch>
  );
}

export default App;
