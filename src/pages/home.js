import React from 'react';
import Step5 from '../components/Step5';
import Step1 from '../components/Step1';
import Step4 from '../components/Step4';
import Step2 from '../components/Step2';
import Step6 from '../components/Step6';
import Step3 from '../components/Step3';
import Header from '../components/Header';
import Stages from '../components/stages';


function Home() {

  const [stage, setstage] = React.useState(1);
  const today = new Date();
  const todayDate = `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;

  const [enquiry, setenquiry] = React.useState({
    pickUpCity: '',
    deliveryCity: '',
    deliveryType: 'pickup',
    pickUpDate: todayDate,
    productName: '',
    weight: '',
    weightType: 'kg'
  });

  const [quotation, setquotation] = React.useState({});

  const [consigneeDetails, setconsigneeDetails] = React.useState({
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    contact: '',
    uploadLR: ''
  });

  const [profileDetails, setprofileDetails] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    password: ''
  });


  React.useEffect(() => {

    // console.log(consigneeDetails.firstname);
  
  }, []);

  return (
      
      <div className='relative'>

      <Header/>

      <Stages step={stage} />

      { stage == 1 ?
        <Step1 enquiry={enquiry} setenquiry={setenquiry} handleStage={setstage} /> :
        stage == 2 ? 
        <Step2 enquiry={enquiry} setenquiry={setenquiry} todayDate={todayDate} handleStage={setstage} /> : 
        stage == 3 ? 
        <Step3 enquiry={enquiry} handleStage={setstage} quotation={quotation} setquotation={setquotation} /> :
        stage == 4 ? 
        <Step4 enquiry={enquiry} consigneeDetails={consigneeDetails} setconsigneeDetails={setconsigneeDetails} handleStage={setstage}/> :
        stage == 5 ? 
        <Step5 handleStage={setstage} profileDetails={profileDetails} setprofileDetails={setprofileDetails} /> :
        <Step6 handleStage={setstage} enquiry={enquiry} quotation={quotation} consigneeDetails={consigneeDetails} profileDetails={profileDetails} />
      }
  
    </div>  

  );

}
  
export default Home;
