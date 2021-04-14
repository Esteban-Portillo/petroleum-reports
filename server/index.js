require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authControllers')
const projectCtrl = require('./controllers/projectController')
const reportCtrl = require ('./controllers/reportControllers')
const subsCtrl = require('./controllers/subscriptionController')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const app = express()

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie : {maxAge: 1000 * 60 * 60 * 24 * 14 }
    })
)

//auth controllers 

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.loguot)

//project controllers

app.post('/project/create', projectCtrl.createProject)
app.get( '/project/get/all' ,projectCtrl.getProjects)
app.get( '/project/get/individual/projects',projectCtrl.getUserProjects )
app.get('/project/get/project', projectCtrl.getProject)
app.put('/project/update/:projectId', projectCtrl.updateProject)
app.delete('/project/delete/:projectId', projectCtrl.deleteProject)

// reports controllers

app.post('/report/create', reportCtrl.createReport)
app.get('/report/:reportId', reportCtrl.getReport)
app.get('/report/all/:projectId', reportCtrl.getAllReports)
app.put('/report/update/:reportId', reportCtrl.updateReport)
app.delete('/report/delete/:reportId', reportCtrl.deleteReport)

//subscriptions 

app.post('/sub/create',subsCtrl.create)
app.delete('/sub/delete/:subId',subsCtrl.delete)
app.get('/get/users/:projectId', subsCtrl.getUsersByProject)
app.get('/get/project/:userId', subsCtrl.getProjectsByUser)

//thank controllers 





massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then( dbInstance => {
        app.set( 'db', dbInstance )
        app.listen( SERVER_PORT, () => console.log(`DB and SERVER running in ${SERVER_PORT}`) )
    } )
