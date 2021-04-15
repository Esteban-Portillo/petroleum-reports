const bcrypt = require('bcrypt')

module.exports = {
    register: async ( req, res ) =>{
        const {admin, name, lastName, title, company, email, password} = req.body
        const db = req.app.get('db')
        const [user] = await db.user.get_user(email)
        try {
            // console.log(user)
            if (user){
                return res.status(409).send('this email is already part of this site')
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password,salt)
            const [newUser] = await db.user.create_user(admin, name, lastName,title,company,email,hash)
            // console.log( req.session)
            
            req.session.user = newUser
            delete req.session.user.hash
            // console.log(req.session.user)

            return res.status(200).send(req.session.user)

        }catch(err){
             (err)
        }

        // return res.status(200).send(user)
    },

    login: async ( req, res ) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const [user] = await db.user.get_user(email)
        if (!user){
            return res.status(403).send('this email dosn t exist ')
        }

        const isAuthenticated = bcrypt.compareSync(password,user.hash)

        if(!isAuthenticated){
            return res.status(403).send('This is a wrong password')
        }

        req.session.user = user
        delete req.session.user.hash


        return res.status(200).send(req.session.user)
    },
    loguot: ( req, res ) => {
        req.session.user = null
        console.log(req.session)
        return res.sendStatus(200)
    }
}