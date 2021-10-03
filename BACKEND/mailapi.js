const nodemailer = require('nodemailer')
const {google} = require('googleapis')

const CLIENT_ID = '434670198114-gl6hevh18o8ubj57qtbf7qnqudq0no57.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//043d1jsojuznjCgYIARAAGAQSNwF-L9IriiMWTRrpVItoSW_e_xgnJqN2IohCy5zC2KDowv-fCC9NrmlmSwbTlfwVo_OYs6UOYZI'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

async function sendMail(email,id){

    try{
        const accessToken = await oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service:'gmail',
            auth: {
                type: 'OAuth2',
                user: 'ravinduyasithgtx@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })
        // http:/localhost:3000/Resetpw/
        const mailOptions = {
            from: 'ecoBin industries<ravinduyasithgtx@gmail.com>',
            to: email,
            subject:"YO nigga whats up?",
            html:`<a href=http://localhost:3000/Resetpw/${id}>Click here</a>`
        }

        const result = await transport.sendMail(mailOptions)
        return result
        
    }catch(error){
        return error
    }
}

module.exports = sendMail;

sendMail().then(result => console.log('Email sent..', result))
.catch(error => console.log(error.message))

