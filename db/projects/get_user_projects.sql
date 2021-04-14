select p.* from projects p
join project_subscription ps on p.project_id = ps.project_id
where ps.user_id = $1;