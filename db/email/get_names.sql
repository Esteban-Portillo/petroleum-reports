select name, email from users 
where user_id in (select user_id from project_subscription 
where project_id = (select project_id from reports where report_id = (select report_id from report_comment where comment_id = $1 )));