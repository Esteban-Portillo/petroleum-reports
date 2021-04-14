module.exports =  {
    getReport : async ( req, res ) => {
        const { reportId } = req.params
        const db = req.app.get('db')
        const report = await db.reports.get_report(reportId)
        return res.status(200).send(report)
    },
    createReport: async ( req, res) => {
        const { reportType, reportName, reportDate, projectId, reportObservation } = req.body

        const db = req.app.get('db')

        const report = await db.reports.create_report(reportType, reportName, reportDate, projectId, reportObservation)

        return res.status(200).send(report)
    },
    getAllReports : async ( req, res ) => {
        const { projectId } = req.params
        const db = req.app.get('db')
        const reports = await db.reports.get_all_reports(projectId)
        return res.status(200).send(reports)
    },
    updateReport : async ( req, res ) => {
        const {reportId } = req.params
        const { reportType, reportName, reportDate, projectId, reportObservation } = req.body
        const db = req.app.get('db')
        const [oldReport] = await db.reports.get_report(reportId)

        const updatedReport = await db.reports.update_report(reportType || oldReport.report_type, reportName || oldReport.report_name, reportDate || oldReport.report_date, projectId || oldReport.project_id, reportObservation || oldReport.report_observation, reportId )

        return res.status(200).send(updatedReport)
    },
    deleteReport: async ( req, res ) => {
        const { reportId } = req.params 
        const db = req.app.get('db')
        db.reports.delete_report(reportId)
        return res.sendStatus(200);
    }
}