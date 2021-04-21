const {TWILIO_ACCOUNT_SECRET_ID,TWILIO_AUTH_TOKEN,PERSONAL_PHONE_NUMBER,TWILIO_PHONE_NUMBER} = process.env

module.exports = {
    sendSMS: (req, res) => {
        const {message} = req.body
        
        const client = require('twilio')(TWILIO_ACCOUNT_SECRET_ID, TWILIO_AUTH_TOKEN);

        client.messages
            .create({
                body: message ,
                from: TWILIO_PHONE_NUMBER,
                to: PERSONAL_PHONE_NUMBER
            })
            .then(message => {
                console.log(message)
                //Do something with this information
                res.send(message)
            }).catch(err=>{
                console.log(err)
                res.sendStatus(500)
            })

    }

}