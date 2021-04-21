module.exports = {
    createComment: async (req, res) => {
        const {report_id, user_id, comment_text, comment_date} = req.body
        const db = req.app.get('db')
        await db.comments.create_comment(report_id, user_id, comment_text, comment_date)
        return res.sendStatus(200)
    },
    getComments: async (req, res ) => {
        const {report_id} = req.params
        const db = req.app.get('db')
        const comments = await db.comments.get_comments(report_id)
        return res.status(200).send(comments)
    },
    updateComment: async ( req, res ) =>{
    const {comment_text, comment_id} = req.body
    const db = req.app.get('db')
    const newComment = await db.comments.update_comment(comment_text, comment_id)
    return res.sendStatus(200)
    },
    deleteComment : async ( req, res ) => {
        const {comment_id} = req.params
        const db = req.app.get('db')
        await db.comments.delete_comment(comment_id)
        return res.sendStatus(200)
    
    }
}