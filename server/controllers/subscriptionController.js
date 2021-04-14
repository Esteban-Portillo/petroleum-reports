module.exports = {
    create: async ( req, res) => {
        const { projectId, userId} = req.body
        const db = req.app.get('db')
        const newSub = await db.subscriptions.create_subscription( projectId, userId )

        return res.status(200).send(newSub)
    },
    delete: async (req, res) => {
        const {subId} = req.params
        const db = req.app.get('db')
        await db.subscriptions.delete_subscription(subId)
        return res.sendStatus(200)
    },
    getUsersByProject: async (req, res) => {
        const {projectId} = req.params
        const db = req.app.get('db')
        const users = await db.subscriptions.get_sub_users_from_projectct(projectId)
        users.forEach( e =>  delete e.hash )
        return res.status(200).send(users)
    },
    getProjectsByUser: async (req, res)=>{
        const {userId} = req.params
        const db = req.app.get('db')
        const projects = await db.subscriptions.get_projects_by_users(userId)
        return res.status(200).send(projects)
    }

}