export const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };


  export const MobileNumberValidation = (phonenumber) => {
   
  
   
      // Define a regular expression to validate the phone number
      const phoneRegex = /^[0-9]{10}$/; // Customize this regex as per your requirements
  
    
      return(phoneRegex.test(phonenumber));
  }