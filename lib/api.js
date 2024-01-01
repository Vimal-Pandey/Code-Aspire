import { alertError } from "@/components/Common/ContactForm"

export const sendContactForm = async (data)=>

{
    console.log(data)
    try {
        const resp  = await fetch('/api/contact',{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json "
            }
        })
        
        return resp.status
        
    } catch (error) {
        console.log(error)
        alertError()
        return "Error"
      
    }
    }