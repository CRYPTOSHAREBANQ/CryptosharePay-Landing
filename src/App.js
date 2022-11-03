import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Transactions from './pages/Transactions/Transactions';
import Payments from './components/form/FormContainer/FormContainer';
import { Company } from './components/Company';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route extract path='/company' element={< Company />}></Route>
          <Route exact path='/transactions/' element={< Transactions />}></Route>
          <Route exact path='/payments/' element={< Payments />}></Route>
        </Routes>
      </div>

    </Router>

  );
}

export default App;
