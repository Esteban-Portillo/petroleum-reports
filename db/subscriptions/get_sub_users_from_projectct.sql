select * from users u 
join project_subscription p on u.user_id = p.user_id
where p.project_id = $1;