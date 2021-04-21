const nodemailer = require ('nodemailer')
const {EMAIL, PASSWORD } = process.env

module.exports = {
    namesEmails: async ( req, res )=> {
        const {comment_id} = req.params
        const db = req.app.get('db')
        const namesAndEmails = await db.email.get_names(comment_id)

        return res.status(200).send(namesAndEmails)
    },
    comment: async ( req, res ) => {
        const {comment_id} =req. params
        const db = req.app.get('db')
        const comment = await db.email.get_individual_comment(comment_id)

        return res.status(200).send(comment)
    },
    sendMail : (req, res ) => {
        const {from, to, subject, text} = req.body
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        });
    
        var mailOptions = {
            from: from,
            to: to,
            subject:subject,
            text: text
        }
    
        transporter.sendMail(mailOptions, (error, info)  => {
            if (error){
                res.status(500).send(error.message)
            }
            console.log('email enviado')
        } )
        
        return res.sendStatus(200)
    }
}