import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Transactions from './pages/Transactions/Transactions';
import Payments from './pages/Payments/Payments';
import { Company } from './components/Company';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {


  return (
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
          {/* <Route exact path='/' element={< Home />}></Route>
          <Route extract path='/company' element={< Company />}></Route> */}
          <Route exact path='/transactions/' element={< Transactions />}></Route>
          <Route exact path='/transactions/payments/:transactionId' element={< Payments />}></Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
