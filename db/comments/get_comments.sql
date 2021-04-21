select * from report_comment rc
join users u on u.user_id = rc.user_id 

where report_id = $1;