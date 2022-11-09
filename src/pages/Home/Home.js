import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "../../components/Banner";
import { Company } from "../../components/Company";
import { Apis } from "../../components/Apis";
import { SignUp } from "../../components/SignUp";

function Home() {
  return (
    <>
      <Banner />
      <SignUp />
      <Company />
      <Apis />
    </>
  );
}

export default Home;
