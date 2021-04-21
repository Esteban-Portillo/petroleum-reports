update report_comment set 
comment_text = $1
where comment_id = $2
returning * ;