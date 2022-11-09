import '../Home/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentsContainer from '../../components/form/PaymentsContainer/PaymentsContainer';
import {useParams} from "react-router-dom";

function Payments() {

  const { transactionId } = useParams();

  return (
    <PaymentsContainer transactionId={transactionId}/>
  );
}

export default Payments;
