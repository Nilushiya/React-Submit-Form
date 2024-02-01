import { useState } from "react";
import SubmitForm from "./submitForm/SubmitForm";
import axios from 'axios';



function App() {
   const [name , setName] =useState("")
   const [number , setMobile] =useState("")
   const [mail , setMail] =useState("")

   const handleSubmit = () => {
      if(name.length === 0){
        alert('Name has left blank');
      }
      else if(number.length === 0){
        alert('Mobile number has left blank');
      }
      // else if(number.length === 0 && name.length === 0){
      //   alert('Name and  Mobile number both have left blank');
      // }
      // else if(number.length === 0 && mail.length === 0){
      //   alert('Mail and  Mobile number both have left blank');
      // }
      else if(mail.length === 0){
        alert('Mail has left blank');
      }
      // else if(mail.length === 0 && name.length === 0){
      //   alert('Name and  Mobile Mail both have left blank');
      // }
      // else if(number.length === 0 && name.length === 0 && mail.length === 0){
      //   alert('All have left blank');
      // }
      else{
        alert('Success');
        const url = 'http://localhost/React%20Submit/submit/dsubmitFormPhp.php/';
        let fData = new FormData();
        fData.append('name' , name)
        fData.append('number' , number)
        fData.append('mail' , mail)
        axios.post(url,fData).then(response => alert(response.data)).catch(error => alert(error))
      }
   }

  return (
    <div className="App">
      <SubmitForm 
        name = {name}
        setName = {setName}
        number = {number}
        setMobile = {setMobile}
        mail ={mail}
        setMail ={setMail}
        handleSubmit = {handleSubmit}
      />
    </div>
  );
}

export default App;
