import nodemailer from "nodemailer"
export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"rathore.as09@gmail.com",
        pass:"hdioruvbvuzufzzh"
    }
})


export const mailOption = {
    from:"rathore.as09@gmail.com",
    to:"rathore.as09@gmail.com"
}