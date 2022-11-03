import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../../components/NavBar";
import { Banner } from "../../components/Banner";
import { Company } from "../../components/Company";
import { Apis } from "../../components/Apis";
import { SignUp } from "../../components/SignUp";
import { Footer } from "../../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <SignUp />
      <Company />
      <Apis />
      <Footer />
    </>
  );
}

export default Home;
