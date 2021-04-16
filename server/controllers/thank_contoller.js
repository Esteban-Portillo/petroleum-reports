module.exports = {
    createThank : async (req, res ) => {
        const { height,
            diameter,
            max_stress_allowed,
            join_efficiency,
            minimun_thickness_measured,
            especific_gravity,
            thank_name,
            report_id,
            country,
            city,
            station } = req.body

        const db = req.app.get('db')
        const thank = db.thanks.create_thank(diameter,max_stress_allowed,
            join_efficiency,
            minimun_thickness_measured,
            especific_gravity,
            thank_name,
            report_id,
            country,
            city,
            station)

        return res.status(200).send(thanks)
    }

}