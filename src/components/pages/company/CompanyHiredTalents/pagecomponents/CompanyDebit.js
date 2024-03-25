import React from "react";
import { useDispatch } from "react-redux";
import { SaveCompanyDebit } from "../../../../../app-redux/features/companyDebitInfo/companyDebitSlice";
import AppButton from "../../../../atoms/AppButton/AppButton";
import AppCreditCardInput from "../../../../organisms/AppCreditCardInput/AppCreditCardInput";
import { luhnCheck } from "../../../../../constants/utils";
import { toast } from "react-toastify";
// import AppStripePayment from "../../../../organisms/AppStripePayment/AppStripePayment";

function CompanyDebit() {
  const dispatch = useDispatch();

  const handleSaveDebitInfo = (data,e)=>{
    e.preventDefault()

    let {cardNum} = data

    let check_luhn_card = luhnCheck(parseInt(cardNum))

    if(!check_luhn_card){
toast.warning("The credit card number is invalid")
      return 0
    }else{
      dispatch(SaveCompanyDebit(data))

    }

  }

  return (
    <div>
      <form onSubmit={(e)=>handleSaveDebitInfo(e)}>
        {/* <AppStripePayment/> */}
        <AppCreditCardInput handleSaveDebitInfo={handleSaveDebitInfo} />
       
      </form>
    </div>
  );
}

export default CompanyDebit;
