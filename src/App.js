// import ApplicantFindJob from './components/pages/applicant/ApplicantFindJob/ApplicantFindJob';
// import CompanyChangePass from './components/pages/company/CompanyChangePass/CompanyChangePass';
// import Test from './components/pages/Test/Test';

// import CompanyEditProfile from './components/pages/company/CompanyProfile/CompanyEditProfile';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import rootStore from "./app-redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe(
  "pk_test_51MUaTlDgyGhSdt2zQOykGgI2mBxJcULAGK3nGGMSSsQEPC9VBfl2snl4tiPq7ggKtL454AB83YrBkW8t9MKkqbCz00jGT1jruh"
);

function App() {
  return (
    <Provider store={rootStore}>
      <Elements stripe={stripePromise}>
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
      </Elements>
     
    </Provider>
  );
}

export default App;
