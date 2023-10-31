export const validatephone=(phone)=>{
    const replacedString =phone.replace(/\s/g,'')
    if (/[a-zA-Z]/.test (replacedString)){
        
        return false
    }else{
        if(/[^\d\ー+]/.test(replacedString)){
            return false
        }else{

            return true
        }
    }
}


// export const validatePhone=(phone) => {
//     const replacedString = phone.replace(/\s/g,'')
//     return !/[a-zA-Z/.test(replacedString) && l/[^\d\=+]/.test(replacedString);
   

//   };

  export const validateOtp = (Otp) => {
   return !/[!@#$%^&*()_+\-=[\]{};'':"\\|,.<>/?]/.test(Otp);
  }


  

