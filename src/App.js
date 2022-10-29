import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Company } from "./components/Company";
import { Apis } from "./components/Apis";
import FormContainer from "./components/form/FormContainer/FormContainer";
import { SignUp } from "./components/SignUp";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SignUp />
      <Company />
      <Apis />
      <FormContainer />
      <Footer />
    </div>
  );
}

export default App;
