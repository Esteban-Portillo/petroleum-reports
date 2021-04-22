module.exports = {
    createProject: async (req, res) => {
        const { projectAdmin, projectName, country, city, station } = req.body
        const db = req.app.get('db')
        const [project] = await db.projects.get_project(projectName)
        console.log(project)

        if( project ){
            return res.status(409).send('Use other project name')
        }
        
        const newProject = await db.projects.create_project(projectAdmin,projectName,country,city,station)

        return res.status(200).send(newProject)
        
    },
    getProjects: async ( req, res ) => {
        const db = req.app.get('db')
        const projects = await db.projects.get_all_projects()
        return res.status(200).send(projects)
    },
    getUserProjects: async (req, res) => {
        const {user_id} = req.session.user
        // console.log(req.session.user)
        // console.log(id)
        const db = req.app.get('db')
        const projects = await db.projects.get_user_projects(user_id)
        console.log(user_id)
        return res.status(202).send(projects)
    },
    getProject: async ( req, res ) =>{
        const { projectName } = req.body
        const db = req.app.get('db')

        const [project] = await db.projects.get_project(projectName)
        // console.log(project)

        res.status(200).send(project)
    },
    updateProject: async ( req, res ) => {
       const  {projectId} = req.params
       const {projectAdmin, projectName, country, city, station} = req.body
       const db =  req.app.get('db')
       const [oldProject ]= await db.projects.get_project_id(projectId)
       
       const updatedProject = await db.projects.update_project(projectAdmin || oldProject.project_admin, projectName || oldProject.project_name, country || oldProject.country, city || oldProject.city, station || oldProject.station, projectId)
       
    //    console.log(updatedProject)
       return res.status(200).send(updatedProject)
    },
    deleteProject : async ( req, res ) => {
        const db = req.app.get('db')
        const {projectId} = req.params 
        await db.projects.delete_project(projectId)
        return res.sendStatus(200)
    },
    getProjectId : async ( req, res ) => {
        const db = req.app.get('db')
        const {projectId} = req.params
        const project = await db.projects.get_project_id(projectId)

        return res.status(200).send(project)
    }

}

