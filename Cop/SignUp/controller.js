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



export const validateEmail=email =>{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
     }