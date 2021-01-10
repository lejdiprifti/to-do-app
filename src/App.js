import './App.css';
import Dashboard from './dashboard/dashboard';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import ToDoForm from './toDoForm/toDoForm'
function App() {
  return (
    <>
    <Router>
     <Switch>
        <Route path='/add'>
          <ToDoForm />
        </Route>
        <Route path='/edit/:id'>
          <ToDoForm />
        </Route>
        <Route path='/'>
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
