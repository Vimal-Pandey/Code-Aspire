import { alertContent } from "@/components/Common/ContactForm";
import { mailOption, transporter } from "config/nodemailer";

const generateEmailContent=(data)=>{
  const EmailIdentifier = {
    name:"Name",
    email:"Email",
    number:"Number",
    subject:"Subject",
    text:"Message"
  }
  const stringData = Object.entries(data).reduce((str,[key,val])=>{
 
    return str += `${EmailIdentifier[key]}: \n${val}\n \n `
  },"")
  const htmlData = Object.entries(data).reduce((str,[key,val])=>{
    return str += (`<h1 class="form-heading" align="left">${EmailIdentifier[key]}</h1><p class="form-answer" align="left">${val}</p>`)
  },"")
  return {
    text:stringData,
    html:`<!DOCTYPE html>
    <html>
      <head>
        <title></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
          body,
          table,
          td,
          a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          table {
            border-collapse: collapse !important;
          }
          body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          @media screen and (max-width: 525px) {
            .wrapper {
              width: 100% !important;
              max-width: 100% !important;
            }
            .responsive-table {
              width: 100% !important;
            }
            .padding {
              padding: 10px 5% 15px 5% !important;
            }
            .section-padding {
              padding: 0 15px 50px 15px !important;
            }
          }
          .form-container {
            margin-bottom: 24px;
            padding: 20px;
            border: 1px dashed #ccc;
          }
          .form-heading {
            color: #ff0000;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 400;
            text-align: left;
            line-height: 20px;
            font-size: 24px;
            margin: 0 0 8px;
            padding: 0;
          }
          .form-answer {
            color: #009700;
            font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
            font-weight: 300;
            text-align: left;
            line-height: 20px;
            font-size: 20px;
            margin: 0 0 24px;
            padding: 0;
          }
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
        </style>
      </head>
      <body style="margin: 0 !important; padding: 0 !important; background: #fff">
        <div
          style="
            display: none;
            font-size: 1px;
            color: #fefefe;
            line-height: 1px;
            max-height: 0px;
            max-width: 0px;
            opacity: 0;
            overflow: hidden;
          "
        ></div>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td
              bgcolor="#ffffff"
              align="center"
              style="padding: 10px 15px 30px 15px"
              class="section-padding"
            >
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 500px"
                class="responsive-table"
              >
                <tr>
                  <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <table
                            width="100%"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tr>
                              <td
                                style="
                                  padding: 0 0 0 0;
                                  font-size: 16px;
                                  line-height: 25px;
                                  color: #232323;
                                "
                                class="padding message-content"
                              >
                                <h2>New Contact Message</h2>
                                <div class="form-container">${htmlData}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>`
  }
}

export default async function handler(req,res){
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name|| !data.email||!data.number||!data.subject||!data.text){
      return res.status(400).json({message:"You Should not be here"})
    }
    try {
      await transporter.sendMail({
        ...mailOption,
        ...generateEmailContent(data),
        subject:data.subject,
      
      });;
      return res.status(200 ).json({success:true})
    } catch (error) {
      console.log(error);
      // console.log(error.error.err)
      return res.status(400).json({message:error.message})
    }
  }
  return res.status(400).json({message:"Bad Request"})
}


// import nodemailer from "nodemailer";
// import sgTransport from "nodemailer-sendgrid-transport";

// const transporter = {
//   auth: {
//     // Update your SendGrid API key here
//     api_key: "...",
//   },
// };

// const mailer = nodemailer.createTransport(sgTransport(transporter));

// export default async (req, res) => {
//   // console.log(req.body)
//   const { name, email, number, subject, text } = req.body;

//   const data = {
//     // Update your email here
//     to: "exampleyourdomain@gmail.com",
//     from: email,
//     subject: "Hi there",
//     text: text,
//     html: `
//             <b>From:</b> ${name} <br /> 
//             <b>Number:</b> ${number} <br /> 
//             <b>Subject:</b> ${subject} <br /> 
//             <b>Message:</b> ${text} 
//         `,
//   };
//   try {
//     const response = await mailer.sendMail(data);
//     console.log(response);
//     res.status(200).send("Email send successfully");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error proccessing charge");
//   }
// };
