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
        const thank = await db.thanks.create_thank(
            height,
            diameter,
            max_stress_allowed,
            join_efficiency,
            minimun_thickness_measured,
            especific_gravity,
            thank_name,
            report_id,
            country,
            city,
            station)
        console.log(thank)
        return res.status(200).send(thank)
    }

}