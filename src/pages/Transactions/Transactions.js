import '../Home/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../../components/NavBar";
import FormContainer from "./../../components/form/FormContainer/FormContainer";
import { Footer } from "../../components/Footer";

function Transactions() {
  return (
    <>
      <NavBar />
      <FormContainer />
      <Footer />
    </>
  );
}

export default Transactions;
