select * from projects u 
join project_subscription p on u.project_id = p.project_id
where p.user_id = $1;