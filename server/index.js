require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authControllers')
const projectCtrl = require('./controllers/projectController')
const reportCtrl = require ('./controllers/reportControllers')
const subsCtrl = require('./controllers/subscriptionController')
const thankCtrl = require( './controllers/thank_contoller' )
const commentCtrl = require ('./controllers/commentsController')
const emailCtrl = require ('./controllers/email_controller')
const twilioCtrl = require ('./controllers/twilio_controller')
const nodemailer = require ('nodemailer')


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, EMAIL, PASSWORD } = process.env
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
app.get( '/project/get/byid/:projectId',projectCtrl.getProjectId)
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

app.post('/thank/create', thankCtrl.createThank )
app.get( '/thank/get/:report_id', thankCtrl.getThank )

//commment controllers

app.post('/comment/create', commentCtrl.createComment)
app.get('/comment/get/:report_id', commentCtrl.getComments)
app.put('/comment/update', commentCtrl.updateComment)
app.delete('/comment/delete/:comment_id',commentCtrl.deleteComment)


// mails 

app.get('/email/names/:comment_id', emailCtrl.namesEmails)
app.get('/comment/:comment_id', emailCtrl.comment) 

// nodemailer 

app.post('/send-email', emailCtrl.sendMail  )

//twilio

app.post('/api/sendSMS', twilioCtrl.sendSMS)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
    .then( dbInstance => {
        app.set( 'db', dbInstance )
        app.listen( SERVER_PORT, () => console.log(`DB and SERVER running in ${SERVER_PORT}`) )
    } )
